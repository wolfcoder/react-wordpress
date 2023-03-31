import React from 'react';
import ReactDom from 'react-dom/client';
import './style.css';
import { Page } from './Page';

const rootEl = document.querySelector('#root');
const root = ReactDom.createRoot(rootEl);

root.render(<Page />);