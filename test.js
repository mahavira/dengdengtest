function parse (input, { borderMark, rightMark, wrongMark, andMark } = { borderMark: ['【', '】'], rightMark: '正确', wrongMark: '其他', andMark: '和' }) {
  const options = []
  const reg = new RegExp(`${borderMark[0]}(.+?)${borderMark[1]}`, 'gm');
  const text = input.replace(reg, (str) => {
    const optionStr = str.replace(borderMark[0], '').replace(borderMark[1], '').replace(rightMark, '');
    const [rightOption, errorOptionsText] = optionStr.split(wrongMark);
    const errorOptions = errorOptionsText.split(andMark).map(e => e.trim());
    options.push([rightOption.trim(), ...errorOptions]);
    return '______';
  })
  return { text, options };
}

// run
var content = `Paraphrasing is often defined as putting a passage from an author into your own words. However, what are your own words? How different must your paraphrase be from the original? The answer is it should be 【正确 considerably 其他 considerable 和 considerate 和 considerately】 different. The whole point of paraphrasing is to show you have read and understood another person's ideas and can summarise them in your own writing style rather than borrowing their phrases. If you just change a few words or add some bits 【正确 of your own 其他 in own 和 of yourself 和 with your own】 to an otherwise reproduced passage, you will probably 【正确 be penalised 其他 be penalising 和 have penalised 和 penalise】 for plagiarism. You should aim to 【正确 condense 其他 amplify 和 copy 和 short】 and simplify a writer's ideas and describe them using different sentence structures and expressions. It is also important to credit the original writer by referencing.`;
parse(content);
