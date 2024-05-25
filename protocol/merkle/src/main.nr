// use dep::noir_merkleroot;
use dep::std;

// copied from noir_merkleroot - easier to copy paste in here
fn compute_merkle_root(leaf: Field, path_indices: [Field; 8], siblings: [Field; 8]) -> Field {
    let n = siblings.len();
    let mut current = leaf;
    for i in 0..n {
        let is_right = (path_indices[i] == 1) as bool;
        let (hash_left, hash_right) = if is_right {
            (siblings[i], current)
        } else {
            (current, siblings[i])
        };
        current = std::hash::poseidon::bn254::hash_2([hash_left, hash_right]);
    }
    current
}

fn main(root: pub Field, leaf: Field, path_indices: [Field; 8], siblings: [Field; 8]) {
    // generate merkle root
    let new_root = compute_merkle_root(leaf, path_indices, siblings);
    assert(new_root == root);
}

#[test]
fn test_my_custom_tree() {
    let leaf = 5417298920632358229503946331647874547703095012333291731894858595676498750711;
    let path_indices = [0, 0, 0, 0, 0, 0, 0, 0];
    let siblings = [
        21663839004416932945382355908790599225266501822907911457504978515578255421292,
        8995896153219992062710898675021891003404871425075198597897889079729967997688,
        15126246733515326086631621937388047923581111613947275249184377560170833782629,
        6404200169958188928270149728908101781856690902670925316782889389790091378414,
        17903822129909817717122288064678017104411031693253675943446999432073303897479,
        11423673436710698439362231088473903829893023095386581732682931796661338615804,
        10494842461667482273766668782207799332467432901404302674544629280016211342367,
        17400501067905286947724900644309270241576392716005448085614420258732805558809,
    ];
    let root = compute_merkle_root(leaf, path_indices, siblings);

    assert(root == 15403892286605756147578194685398955343522683323319211105324859804267310098432);
}
