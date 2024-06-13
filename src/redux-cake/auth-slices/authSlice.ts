import toast from "react-hot-toast";
import { apiSlice } from "../apiSlice";
import supabase from "@/config/supabase";
import {
  loginSuccessfulMessage,
  logoutSuccess,
  signUpSuccessfulMessage,
} from "@/utils/messages";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      // Sign in with email =======================
      signUpWithEmail: builder.mutation({
        queryFn: async ({ email, password, username }) => {
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                username,
                // Default background
                background: "",
                // Profile picture
                profile: "",
                desc: "I am a mysterious doer, i can do a lot of stuff, and get the job done!",
              },
            },
          });

          if (error) {
            // hot toast
            toast.error(`We had trouble signing you up, ${error.message}`);
            throw { error };
          }
          // Hot toast
          toast.success(
            signUpSuccessfulMessage.message,
            signUpSuccessfulMessage?.icon
              ? { icon: signUpSuccessfulMessage.icon }
              : {},
          );
          return { data };
        },
        invalidatesTags: ["user"],
      }),
      // Getting the current user =======================
      getCurUser: builder.query({
        queryFn: async () => {
          const { data: session, error: sessionError } =
            await supabase.auth.getSession();
          if (!session.session) return { error: sessionError };
          const { data, error } = await supabase.auth.getUser();
          if (error) {
            throw new Error(error?.message);
          }

          return { data };
        },
        providesTags: ["user"],
      }),
      // Logging out the user =======================
      logoutUser: builder.mutation({
        queryFn: async () => {
          const { error } = await supabase.auth.signOut();
          if (error) {
            // hot toast
            toast.error(`We had trouble logging out, ${error.message}`);
            throw new Error(error?.message);
          }
          // hot toast
          toast.success(
            logoutSuccess.message,
            logoutSuccess?.icon ? { icon: logoutSuccess.icon } : {},
          );
          return { data: {} };
        },
        invalidatesTags: ["user"],
      }),
      // Logging in the user =======================
      login: builder.mutation({
        queryFn: async ({ email, password }) => {
          const { error, data } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
          if (error) {
            toast.error(
              `We had trouble logging into your account, ${error.message} `,
            );
            throw new Error(error?.message);
          }

          toast.success(
            loginSuccessfulMessage.message,
            loginSuccessfulMessage?.icon
              ? { icon: loginSuccessfulMessage.icon }
              : {},
          );
          return { data, isSuccess: true };
        },
        invalidatesTags: ["user"],
      }),
      // Login with github =================
      loginWithGithub: builder.mutation({
        queryFn: async () => {
          const { error, data } = await supabase.auth.signInWithOAuth({
            provider: "github",
          });

          if (error) {
            toast.error(
              `Failed to login with your github account ${error.message}`,
            );
            throw new Error(error.message);
          }
          toast.success(
            loginSuccessfulMessage.message,
            loginSuccessfulMessage?.message
              ? { icon: loginSuccessfulMessage.icon }
              : {},
          );
          return { data };
        },
      }),
    };
  },
});

// returns the mutation result
export const selectSignUpResult =
  extendedApiSlice.endpoints.signUpWithEmail.select("auth");

export const {
  useSignUpWithEmailMutation,
  useGetCurUserQuery,
  useLogoutUserMutation,
  useLoginMutation,
  useLoginWithGithubMutation,
} = extendedApiSlice;
export default apiSlice.reducer;
