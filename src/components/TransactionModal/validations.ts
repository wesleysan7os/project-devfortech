export function isTitleValid(titleInput: string | undefined): boolean {
  const formattedTitleInput = titleInput?.replace(/\s+/g, ' ').trim()
  return formattedTitleInput ? true : false
}

export function isValueValid(valueInput: string | undefined): boolean {
  const valueInt = Number(valueInput)
  return valueInt && valueInt > 0 && valueInt <= 999999 ? true : false
}

export function isCategoryValid(categoryInput: string | undefined): boolean {
  return categoryInput != '' ? true : false
}
