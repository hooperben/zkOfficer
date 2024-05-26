import Divider from "./divider";

const Text = ({ children }: any) => <p className="mb-4">{children}</p>;

const HowItWorks = () => (
  <div className="max-w-[70%]">
    <div className="font-bold text-xl">How does zk0fficer work?</div>

    <Divider />

    <Text>
      zk0fficer allows for reusing and validation of existing digital
      credentials, while keeping your credentials private. You can present your
      credentials to the zk0fficer, and they can validate their legitimacy,
      without knowing anything about them.
    </Text>

    <Text>
      In this example implementation site, a user starts with a message that
      they have signed by a central source. Here&apos;s an example:
    </Text>

    <Text>
      0x51a1ec0d55aa607f8927cba091a66f4daf1f56caaee90dcdbad67b5cf4af8bd54ea4ba8
      5b49bda9b8de08c9a0714611449bf8c74960f2307114942e26791ab991c
    </Text>

    <Text>
      This does look like Gibberish, but it is actually a message that was once
      human readable. This message was once a data record of:
    </Text>

    <Text>
      {`
      {
        "firstname": "John",
        "lastname": "Doe"
      }
      `}
    </Text>

    <Text>
      That was then hashed, then signed by a secret that only an authority could
      know. However, since John has his signed message, and his first and last
      name (the message contents), he can actually take this message, and prove
      he knows the steps to recreate the hash, up to the point before it was
      signed by the authority.
    </Text>

    <Text>
      zk0fficer works by taking Johns steps to recreate his hash, proves it
      checks out (validates that the authorities signature is valid), and if it
      does, creates a public encrypted record for everyone to see, that only
      John can then decrypt and use.
    </Text>

    <Text>
      Using the wizardry of Zero Knowledge proofs, now that there is a public
      encrypted record, John can prove the existence of his encrypted record,
      without revealing anything about the record itself.
    </Text>

    <Text>
      Our example is very specific and not all that useful as anyone could know
      Johns details in this simple model - however, the zk0fficer model can
      scale to any kind of data input, and implement any kind digital signature
      model (somewhat easily).
    </Text>

    <Text>
      Whenever you currently need to verify your identity, chances are
      you&apos;re taking a photo of your passport or drivers lisense, and
      sending it off to a company whose{" "}
      <a
        href="https://en.wikipedia.org/wiki/2022_Optus_data_breach"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-semibold underline"
      >
        data safety standards you have to trust
      </a>
      . With tools like zk0fficer, you are closer to being able to prove your
      identity, without revealing any of your more personal data.
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
