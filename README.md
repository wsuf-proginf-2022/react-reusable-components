# React Reusable components

- counter
- dropdown
- searchfield

## To setup the project from scrach

```
 npm install -D prettier eslint eslint-config-prettier eslint-plugin-prettier;
 npm install -D react react-dom parcel;
```

```
npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

for class properties:

```
npm i -D @babel/plugin-proposal-class-properties

```

create .babelrc:

```
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

# for typescript

```
npm install -D @types/react @types/react-dom
npx tsc --init
```

npx: execute npm binary packages from the npm repo
legenerálja a tsconfig.json file-t

- a tsconfig-ban a target legyen es2021,
- uncomment-eld a "jsx": "preserve" sort

## eslint for typescript

```
npm i -D eslint-import-resolver-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

package.json-ban a lint-hez adjuk hozzá a ts és tsx filetípusokat

eslintrc-ben: az extendsbe (a prettier elé! annak mindig utolsonak kell lennie)
irjuk be ezt:

```
'plugin:@typescript-eslint/recommended',
'plugin:@typescript-eslint/recommended-requiring-type-checking',

```

a requiring-type-checking miatt meg kell mondanunk a parserOptions-ben hogy hol a tsconfig.json file:

```
  project: ['./tsconfig.json'],

```

rules-nal erdemes ezt kikapcsolni:

```
'@typescript-eslint/no-empty-function' : 0
```

plugins-nel:

```
'@typescript-eslint',
```

settings-be (react után):

```
'import/parsers': {
  '@typescript-eslint/parser': ['.ts', '.tsx']
},
'import/resolver': {
  'typescript': {
    'alwaysTryTypes': true
  }
}
```

ezután ha npm run lint-et futtatunk lesz egy csomó hibánk.
