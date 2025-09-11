
export const FormatterDate = (date: Date) => {
  const localeDateTime = new Date(date)
  return localeDateTime.toLocaleString('pt-BR', {
    // dateStyle: "long",
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}