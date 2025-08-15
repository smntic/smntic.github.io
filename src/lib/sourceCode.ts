import { SiGithub, SiGitlab, SiBitbucket } from 'react-icons/si';

type Provider = 'github' | 'gitlab' | 'bitbucket';

export interface SourceCode {
  url: string;
  display: string;
  provider?: Provider;
}

const providerMap: Record<Provider, React.ComponentType> = {
  github: SiGithub,
  gitlab: SiGitlab,
  bitbucket: SiBitbucket,
};

export function getProviderIcon(provider: Provider): React.ComponentType {
  return providerMap[provider];
}
