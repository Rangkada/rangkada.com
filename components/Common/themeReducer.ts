const THEME_KEY = 'theme';

type ThemeReducerAction = {
  type: 'toggle' | 'set',
  newTheme?: string;
}

export default function themeReducer(theme: string, action: ThemeReducerAction) {
  let newTheme = 'light';
  /*
  if (action.type === 'set') {
    newTheme = action.newTheme;
  } else {
    newTheme = theme === 'light' ? 'dark' : 'light';
  }
  localStorage.setItem(THEME_KEY, newTheme);
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
    */

  return newTheme;
}
