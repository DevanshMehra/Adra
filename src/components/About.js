/** @jsx jsx */
import { jsx } from '@emotion/core';
import Content from './Content';
import { useHead } from '../hooks';

const titleContent = `Adra - About`;
const descriptionContent = `About Adra, the secure mp3 converter in your browser with no third party upload.`;

const Privacy = () => {
  useHead({
    title: titleContent,
    meta: {
      description: {
        content: descriptionContent,
      },
      'og:title': { content: titleContent },
      'twitter:title': { content: titleContent },
      'twitter:text:title': {
        content: titleContent,
      },
      'twitter:description': {
        content: descriptionContent,
      },
    },
  });

  const name = <strong>Adra</strong>;
  /* eslint-disable react/no-unescaped-entities */

  return (
    <Content>
      <h2>About Adra</h2>
      <p>
        {name} is a secure MP3 encoder that works directly in your browser.
        Convert your lossless audio to MP3 for better portability, without
        sacrificing the privacy and security of your intellectual property.
      </p>
      <h3>The use case</h3>
      <p>
        When musicians or sound artists need to share audio files, or upload
        them somewhere, they often need to first convert them to MP3. The
        lossless WAV version that the DAW software exports is often way too big
        to send easily, and can cause performance issues when uploading online.
      </p>
      <p>
        Sometimes it's easier to send a quick MP3, instead of a huge WAV or FLAC
        audio file.
      </p>
    </Content>
  );
};
/* eslint-enable react/no-unescaped-entities */
export default Privacy;
