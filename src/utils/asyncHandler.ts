export const asyncHandler = (fn) => async (args) => {
  try {
    return await fn(args);
  } catch (error) {
    return { error: { message: error.message } };
  }
};
