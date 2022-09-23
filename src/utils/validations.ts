export function isTitleValid(titleInput: string | undefined): boolean {
  const formattedTitleInput = titleInput?.replace(/\s+/g, ' ').trim()
  return formattedTitleInput ? true : false
}

export function isValueValid(valueInput: string | number | undefined): boolean {
  if (valueInput && valueInput > 0 && valueInput <= 999999) {
    return true
  } else {
    return false
  }
}

export function isCategoryValid(categoryInput: string | undefined): boolean {
  return categoryInput != '' ? true : false
}
