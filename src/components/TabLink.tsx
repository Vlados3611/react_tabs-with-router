import React from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import classNames from 'classnames';

import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  currId: string;
};

export const TabLink: React.FC<Props> = ({ id, currId, title }) => (
  <li
    data-cy="Tab"
    className={classNames({
      'is-active': id === currId,
    })}
  >
    <Link
      to={id}
    >
      {title}
    </Link>
  </li>
);
