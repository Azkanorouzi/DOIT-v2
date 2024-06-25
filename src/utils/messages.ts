import { ToastMessage } from "./definitions";

export const authenticationFailedMessage: ToastMessage = {
  message: "you need to login to access this page!",
  icon: "🚫",
};

export const passwordNotMatchMessage: ToastMessage = {
  message: "Password did not match",
};

export const signUpSuccessfulMessage: ToastMessage = {
  message: "Sign up was successful",
};
export const loginSuccessfulMessage: ToastMessage = {
  message: "Login success",
};

export const passwordChangeSuccess: ToastMessage = {
  message: "Password changed successfully.",
};
export const descriptionChangeSuccess: ToastMessage = {
  message: "Description changed successfully",
};
export const profileUploadSuccess: ToastMessage = {
  message: "File uploaded successfully",
};

export const logoutSuccess: ToastMessage = {
  message: `You're now logged out`,
};

export const getDefaultGenerateSuccessMessage = ({
  numTagsCreated,
  numProjectsCreated,
  numEnvironmentsCreated,
  numGoalsCreated,
  numTodosCreated,
  numOrganizationsCreated,
}): ToastMessage => {
  return {
    message: `Created ${numTodosCreated} todos, ${numProjectsCreated} projects, ${numTagsCreated} tags, ${numGoalsCreated} goals, ${numTagsCreated} tags, ${numEnvironmentsCreated} environments. and ${numOrganizationsCreated} organiztions created`,
  };
};
