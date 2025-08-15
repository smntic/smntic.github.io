import { Metadata } from 'next';

const SITE_NAME = 'smntic.dev';
const DEFAULT_DESC = "smntic's portfolio website";

export function makeMetadata(pageTitle: string, description = DEFAULT_DESC): Metadata {
  return {
    title: `${pageTitle} | ${SITE_NAME}`,
    description,
  };
}
