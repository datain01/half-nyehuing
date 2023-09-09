// nameGenerator.ts
export const getRandomLetter = (letters: string[]): string => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
}

export const generateName = (userInput: string, letters: string[], position: string, setGeneratedName: (name: string) => void) => {
    if (userInput.length !== 1) {
        alert('한 글자를 입력해주세요.');
        return;
    }

    if (!letters.includes(userInput)) {
        alert('사용할 수 없는 글자입니다.');
        return;
    }

    const randomLetter = getRandomLetter(letters);
    let isFront = position === 'front';

    if (position === 'random') {
        isFront = Math.random() < 0.5;
    }

    const name = isFront ? userInput + randomLetter : randomLetter + userInput;
    setGeneratedName(name);
};


export const generateNameWithLength = (
    userInput: string, 
    letters: string[], 
    position: string, 
    length: number, 
    setGeneratedName: (name: string) => void
): string => {
    if (userInput.length !== 1) {
        alert('한 글자를 입력해주세요.');
        return '';
    }

    if (!letters.includes(userInput)) {
        alert('사용할 수 없는 글자입니다.');
        return '';
    }

    let name = '';
    const randomPosition = Math.floor(Math.random() * length);

    for (let i = 0; i < length; i++) {
        if (position === 'random' && i === randomPosition) {
            name += userInput;
        } else if (position === 'front' && i === 0) {
            name += userInput;
        } else if (position === 'back' && i === length - 1) {
            name += userInput;
        } else {
            name += getRandomLetter(letters);
        }
    }

    setGeneratedName(name);
    return name;
}
