export const DEPARTMENTS=[
    'CS',
    'MATH',
    'PHYS',
    'CHEM',
    'BIO',
    'ENG',

];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((department) => ({
    label: department,
    value: department.toLowerCase(),
  }));