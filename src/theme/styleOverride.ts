export default function styleOverrides(borderRadius: number) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: `${borderRadius}px`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: `${borderRadius}px`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: `${borderRadius}px`,
        },
        input: {
          borderRadius: `${borderRadius}px`,
        },
        notchedOutline: {
          borderRadius: `${borderRadius}px`,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-tag': {
            borderRadius: 4,
          },
        },
        popper: {
          borderRadius: `${borderRadius}px`,
        },
      },
    },
  };
}
