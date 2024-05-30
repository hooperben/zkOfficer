import Divider from "./divider";

const Text = ({ children }: any) => <p className="mb-4">{children}</p>;

const HowItWorks = () => (
  <div className="max-w-[70%]">
    <div className="font-bold text-xl">How does zk0fficer work?</div>

    <Divider />

    <Text>
      In this example implementation site, a user starts with a username. This
      username is not currently uniquely enforced, meaning that there there
      could for example be multiple usernames registered as &apos;John&apos; -
      for this example, it doesn&apos;t really matter.
    </Text>

    <Text>
      What does matter though, is the random number that is generated when you
      submit your username. If you have created your zkLicense, you can view
      yours at the top of the page by clicking the &apos;My Account&apos;
      button. If you haven&apos;t created one - what are you waiting for??
    </Text>

    <Text>
      Anyway, this random number is something that only you can know. It&apos;s
      kind of like your password.
    </Text>

    <Text>
      When you submit your username, you send it to a public registry, in the
      form:
    </Text>

    <p className="font-normal my-8">
      my_public_record = hash(
      <span className="font-extrabold">hash(user_secret)</span>, username)
    </p>

    <Text>
      The hash function here is like a magic blender that takes any kind of
      information, mixes it up, and (almost) always gives you a unique output.
    </Text>

    <Text>
      An important property of hash functions is that they are one way. If you
      blend something up, you can&apos;t unblend it up - there&apos;s no way to
      see what was blended up to get your output (unless you know, unless
      you&apos;re the one who blended it..).
    </Text>

    <Text>So what&apos;s all this &apos;zk&apos; stuff?</Text>

    <div className="mb-4 italic">
      From{" "}
      <a
        href="https://en.wikipedia.org/wiki/Zero-knowledge_proof"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold underline"
      >
        wikipedia:
      </a>{" "}
      In cryptography, a zero-knowledge proof or zero-knowledge protocol is a
      method by which one party (the prover) can prove to another party (the
      verifier) that a given statement is true, while avoiding conveying to the
      verifier any information beyond the mere fact of the statement&apos;s
      truth.
    </div>

    <Text>
      The core premise of the zk0fficer is that only you know what user_secret
      can be hashed to re-create your public record, and using the Wizardry of
      Zero Knowledge proofs - you can prove that you know how to re-create this
      public record, without revealing how, or which public record.
    </Text>

    <Text>
      Our zkLicense model on this demo site is very case specific and not all
      that useful, it just demonstrates that you can prove that you have a
      public record of something, without revealing any details about it.
      However, the zk0fficer model can scale to any kind of data input -
      passports, licenses, memberships, subscriptions, tickets, whatever you
      want. If it is a digital record, a zk0Officer is capable of checking
      it&apos;s validity - without publicly revealing anything about it.
    </Text>

    <Text>
      In the modern world, whenever you currently need to verify your identity,
      chances are you&apos;re taking a photo of your passport or drivers
      license, and sending it off to a company whose{" "}
      <a
        href="https://en.wikipedia.org/wiki/2022_Optus_data_breach"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold underline"
      >
        data safety standards you have to trust
      </a>
      . With tools like zk0fficer becoming more feasible and easier to build,
      you are closer to being able to prove your identity, without revealing any
      of your more personal data than you need to.
    </Text>

    <div className="mb-[40px]" />

    <div className="font-bold text-xl">Project Details</div>

    <Divider />

    <Text>
      Built by {` `}
      <a
        href="https://x.com/0xbenhooper"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold underline"
      >
        Ben
      </a>
      {`, `}
      <a
        href="https://x.com/DeryaKarl"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold underline"
      >
        Derya
      </a>
      {` `} and {` `}
      <a
        href="https://x.com/niklas_long"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold underline"
      >
        Niklas
      </a>
      {` `} as part of{" "}
      <a
        href="https://ethberlin.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold underline"
      >
        ETHBerlin04
      </a>
      , where the theme was &apos;Identity Crisis&apos;.
    </Text>
    <Text>
      For our Zero Knowledge proving system, we used the PLONK based circuit
      system Noir, created by {` `}
      <a
        href="https://x.com/aztecnetwork"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold underline"
      >
        Aztec
      </a>
      {`. `}
    </Text>
    <Text>
      The source code is available in the Github{" "}
      <a
        href="https://github.com/hooperben/zkOfficer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold underline"
      >
        here.
      </a>
    </Text>
  </div>
);

export default HowItWorks;
