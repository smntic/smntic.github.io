import { Metadata } from 'next';
import { makeMetadata } from 'lib/metadata';
import { FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import SocialLink from 'components/SocialLink';

export const metadata: Metadata = makeMetadata('Contact', "smntic's contact information");

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        Please feel free to reach out to me via email at{' '}
        <a href="mailto:simon@smntic.dev">simon@smntic.dev</a>.
      </p>
      <p>Contact me directly if you need my phone number/address/etc.</p>
      <h2>Quick Links</h2>
      <ul>
        <li>
          <SocialLink icon={<FaGithub />} href="https://github.com/smntic" label="smntic" />
        </li>
        <li>
          <SocialLink icon={<FaDiscord />} href="https://discord.com/users/smntic" label="smntic" />
        </li>
        <li>
          <SocialLink
            icon={<SiCodeforces />}
            href="https://codeforces.com/profile/MrPerson"
            label="MrPerson"
          />
        </li>
        <li>
          <SocialLink
            icon={<FaYoutube />}
            href="https://youtube.com/@smnticdev"
            label="@smnticdev"
          />
        </li>
      </ul>
    </>
  );
}
