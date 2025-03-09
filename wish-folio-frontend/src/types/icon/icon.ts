export enum IconName {
  SUN = 'pi-sun',
  PLUS = 'pi-plus',
}

export const getIconClass = (name: IconName) => {
  return `pi ${name}`
}
