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
    // Use fake timers to control the setInterval in script.js
    jest.useFakeTimers();
    // Start with a deterministic Date.now value
    jest.spyOn(Date, 'now').mockImplementation(() => 1000);

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

  test('current-time element exists and updates on interval', () => {
    const timeEl = getByTestId(container, 'test-user-time');
    // Initial value was set by script.js using mocked Date.now
    expect(timeEl.textContent).toBe('1000');

    // Change Date.now and advance timers so the interval callback runs
    Date.now.mockImplementation(() => 2000);
    jest.advanceTimersByTime(1100);
    expect(timeEl.textContent).toBe('2000');
  });

  afterAll(() => {
    // Restore timers and Date.now
    jest.useRealTimers();
    if (Date.now && Date.now.mockRestore) Date.now.mockRestore();
  });
});

describe('About page content', () => {
  let aboutContainer;
  beforeAll(() => {
    const aboutHtml = fs.readFileSync(path.resolve(__dirname, '..', 'src', 'aboutme', 'about.html'), 'utf8');
    document.documentElement.innerHTML = aboutHtml;
    aboutContainer = document.body;
  });

  test('renders about page and bio', () => {
    const aboutPage = getByTestId(aboutContainer, 'test-about-page');
    const bio = getByTestId(aboutContainer, 'test-about-bio');
    expect(aboutPage).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
    expect(bio.textContent.trim().length).toBeGreaterThan(0);
  });

  test('goals and confidence lists exist', () => {
    const goals = getByTestId(aboutContainer, 'test-about-goals');
    const confidence = getByTestId(aboutContainer, 'test-about-confidence');
    expect(goals.querySelectorAll('li').length).toBeGreaterThanOrEqual(1);
    expect(confidence.querySelectorAll('li').length).toBeGreaterThanOrEqual(1);
  });
});
