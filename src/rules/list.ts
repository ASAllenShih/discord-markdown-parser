import SimpleMarkdown from 'simple-markdown';
import { extend } from '../utils/extend';
import { ListRegex } from '../utils/regex';

export const list = extend(
  {
    match: function (source, state) {
      if (state.prevCapture === null || state.prevCapture[0] === '\n') {
        return ListRegex.exec(source);
      }
      return null;
    },
  },
  SimpleMarkdown.defaultRules.list
);
