# Regular Expression

Regular expressions are used to search patterns in strings.

In Javascript Regular Expression or Regex are defined within

    /subesh/

Here `subesh` is a regular expression

## Terms in Regular Expressions

### 1. Flags

Flags determine the mode for the regular expression.

```javascript
let a = /the/gi;
```

* `g` - indicates global search meaning search the string for all possible matches. If not set returns first match.

* `i` - is set to indicate that the search mode is case insensitive.

### 2. Character Sets

This is a way to match several different characters in a single positions.
It is done by using `[]`

Example:

```javascript
let exp = /[hp]ari/;
```

In the above example the Regex matches both `hari` and `pari`.
(Union Operation)

### 3. Exclude Sets

This is used to exclude certain sets of characters from a position.

Example:

```javascript
let exp = /[^hp]ari/;
```

Here, all the sequence of letter for `*ari` will match except for `h` and `p`.

### 4. Ranges

Typing in all possible letters in a sequence is prone to human errors. Regex provides a way to show the range between two characters through a set

Example:

```javascript
let a = /[a-z]/
```

The above exp accepts any character from `a` to `z`. You can add multiple ranges in a set. These ranges must be valid.

### 5. Repeating Characters

To match repeating characters we use `+` (positive closure) to
match any number of repetition. However, you can specify the number of times a character is repeated through `{low,high}` the high can be set empty.

Example:

```javascript
let a = /[a]+ /  // Matches any number of a's
let b =  /[a]{2} / //Matches two consecutive a's
let c = /[a]{2,6} / //Matches a's repeating between 2 to 6
let d = / [a]{2,}/ //Matches a's repeating two or more time.
```

**Note :** There can't be any spaces in between the `{}`.

