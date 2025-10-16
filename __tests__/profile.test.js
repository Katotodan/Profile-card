/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const { getByTestId, getByText, getAllByRole } = require('@testing-library/dom');
require('@testing-library/jest-dom');

describe('Profile card static content', () => {
  let container;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf8');
    document.documentElement.innerHTML = html;
    // If script.js manipulates DOM on load, require it here (safe-guard)
    const scriptPath = path.resolve(__dirname, '..', 'script.js');
    if (fs.existsSync(scriptPath)) require(scriptPath);
    container = document.body;
  });

  test('renders profile card', () => {
    const card = getByTestId(container, 'test-profile-card');
    expect(card).toBeInTheDocument();
  });

  test('renders user name and avatar', () => {
    const name = getByTestId(container, 'test-user-name');
    const avatar = getByTestId(container, 'test-user-avatar');

    expect(name).toBeInTheDocument();
    expect(name.textContent.trim().length).toBeGreaterThan(0);
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src');
  });

  test('renders hobbies and dislikes lists', () => {
    const hobbies = getByTestId(container, 'test-user-hobbies');
    const dislikes = getByTestId(container, 'test-user-dislikes');

    expect(hobbies).toBeInTheDocument();
    expect(dislikes).toBeInTheDocument();

    expect(hobbies.querySelectorAll('li').length).toBeGreaterThanOrEqual(1);
    expect(dislikes.querySelectorAll('li').length).toBeGreaterThanOrEqual(1);
  });

  test('social links include linkedin and twitter/x', () => {
    const linkedin = getByTestId(container, 'test-user-social-linkedin');
    const twitter = getByTestId(container, 'test-user-social-twitter');
    expect(linkedin.querySelector('a')).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    expect(twitter.querySelector('a')).toHaveAttribute('href', expect.stringContaining('x.com'));
  });
});
