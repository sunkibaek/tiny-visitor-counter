export const CURRENT_STATTUS = {
  equalToMax: "EQUAL_TO_MAX",
  overMax: "OVER_MAX",
  normal: "NORMAL",
};

export const DEFAULTS = {
  max: 30,
  limit: 9999,
};

export const getCurrentStatus = (current, max) => {
  if (current === max) {
    return CURRENT_STATTUS.equalToMax;
  }

  if (current > max) {
    return CURRENT_STATTUS.overMax;
  }

  return CURRENT_STATTUS.normal;
};
