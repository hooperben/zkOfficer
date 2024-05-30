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


fn main(
    root: pub Field, // the public merkle root
    verifying_party: pub Field, // the public user (e.g. token contract address)
    nullifier: pub Field, // the hash(hash(leaf), verifying_party) - ensures that proofs can only be used once (if desired)
    user_secret: Field, // the users secret value that only they know
    user_hash: Field, // other contents of the leaf that is not the hashed user secret
    path_indices: [Field; 8], // the path to reconstruct the root hash
    siblings: [Field; 8] // the values to hash with to reconstruct the root hash
) {
    let hashed_user_secret = std::hash::poseidon::bn254::hash_1([user_secret]);
    let constructed_leaf = std::hash::poseidon::bn254::hash_2([user_hash, hashed_user_secret]);

    let reconstructed = compute_merkle_root(constructed_leaf, path_indices, siblings);
    assert(reconstructed == root);

    let hashed_leaf = std::hash::poseidon::bn254::hash_1([constructed_leaf]);
    let reconstructed_nullifier = std::hash::poseidon::bn254::hash_2([hashed_leaf, verifying_party]);

    assert(reconstructed_nullifier == nullifier);
}

#[test]
fn test_user_proof() {
    // you can see how all of these values were generated in test/tree.test.ts
    let user_secret = 21088105314810073508975613344133470274112327938226801880624427918733235725102;
    let user_message_hash = 1094512989699362729594931894528306073986937554258056373863517772753396744744130346730127134332584094622740605796612085827470982510672158515774275693625186588;

    let user_secret_hashed = std::hash::poseidon::bn254::hash_1([user_secret]);
    let user_entire_leaf = std::hash::poseidon::bn254::hash_2([user_message_hash, user_secret_hashed]);

    let siblings = [
        646041521475846269770795558564087943729987610991974902272112272796353264027,
        406000916945970190879203159695438731406108859141311651035055037641145376456,
        19879340424176522681690145818307022565277027092574174900288871068574419163901,
        16718310851997401367530020367819564243338149016591041855050507870515953037886,
        17713539211421300584737114048754272809619730491686625593036126314446641044351,
        10356590040654234094658216949980199905324726109473883971577999674454442849404,
        1560676133907152721901408863432669111205978319428533313725139768650238558992,
        4807318751037267999282069635945170205410602831294907231714652299302921700376
      ];
      let path_indices = [0, 0, 0, 0, 0, 0, 0, 0];

      let root = 20704910433492607786601340540890104877245058437810518228418928762640883468247;
      let computed_root = compute_merkle_root(user_entire_leaf, path_indices, siblings);
      assert(computed_root == root);

      let verifying_party = 367231332701610893829243812156929160914275264393;

      let nullifier = 9291876980384183444186084138533745225890978880380560033767241541805033715485;

      let hashed_leaf = std::hash::poseidon::bn254::hash_1([user_entire_leaf]);
      let reconstructed_nullifier = std::hash::poseidon::bn254::hash_2([hashed_leaf, verifying_party]);
      
      assert(reconstructed_nullifier == nullifier);
}


#[test]
fn test_unit_test() {
    
    let root = 6824044582471495446926550712125199449156029465681270509425042484606489731980;
    let verifying_party = 912823093544680850579175995568783282090442467040;
    let nullifier = 6161697962444095743496698139677235795379421072991076086097965410163690222945;
    let user_secret = 59404705328258290697351686964579660066133903649914313678738035191662723809915;
    let user_hash = 92830972775536585228985154580318340830264509290582725606020834371440172795819;
    let path_indices = [0, 0, 0, 0, 0, 0, 0, 0];
    let siblings = [
        15403892286605756147578194685398955343522683323319211105324859804267310098432,
        8995896153219992062710898675021891003404871425075198597897889079729967997688,
        15126246733515326086631621937388047923581111613947275249184377560170833782629,
        6404200169958188928270149728908101781856690902670925316782889389790091378414,
        17903822129909817717122288064678017104411031693253675943446999432073303897479,
        11423673436710698439362231088473903829893023095386581732682931796661338615804,
        10494842461667482273766668782207799332467432901404302674544629280016211342367,
        17400501067905286947724900644309270241576392716005448085614420258732805558809
    ];

    let hashed_user_secret = std::hash::poseidon::bn254::hash_1([user_secret]);
    let constructed_leaf = std::hash::poseidon::bn254::hash_2([user_hash, hashed_user_secret]);

    let reconstructed = compute_merkle_root(constructed_leaf, path_indices, siblings);
    assert(reconstructed == root);

    let hashed_leaf = std::hash::poseidon::bn254::hash_1([constructed_leaf]);
    let reconstructed_nullifier = std::hash::poseidon::bn254::hash_2([hashed_leaf, verifying_party]);

    assert(reconstructed_nullifier == nullifier);
      
}