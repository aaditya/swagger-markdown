import { transformFile } from './convert';
import { Options } from './types';

export default function Markdown(options: Options) {
  if (!options.output) {
    options.output = options.input.replace(/(yaml|yml|json)$/i, 'md');
  }

  return transformFile(options);
}
