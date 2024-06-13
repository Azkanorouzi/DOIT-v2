import supabase from "@/config/supabase";
import { apiSlice } from "../apiSlice";
import toast from "react-hot-toast";
import {
  descriptionChangeSuccess,
  passwordChangeSuccess,
  profileUploadSuccess,
} from "@/utils/messages";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      uploadBackground: builder.mutation({
        queryFn: async ({ id, file }) => {
          const randomNum = Math.random();
          //   Uploading profile
          const { data, error } = await supabase.storage
            .from("background")
            .upload(`background-${id}-${randomNum}`, file);

          const { error: error2 } = await supabase.auth.updateUser({
            data: {
              background: `https://bajredxtbeceozencuse.supabase.co/storage/v1/object/public/background/background-${id}-${randomNum}`,
            },
          });

          const err = error && error2;

          if (err) {
            toast.error(`We had trouble uploading the picture: ${err.message}`);
            throw err;
          }

          toast.success(
            profileUploadSuccess.message,
            profileUploadSuccess.icon
              ? { icon: profileUploadSuccess.icon }
              : {},
          );
          return { data };
        },
        invalidatesTags: ["user"],
      }),
      uploadProfile: builder.mutation({
        queryFn: async ({ id, file }) => {
          const randomNum = Math.random();
          //   Uploading profile
          const { data, error } = await supabase.storage
            .from("profile")
            .upload(`profile-${id}-${randomNum}`, file);

          const { error: error2 } = await supabase.auth.updateUser({
            data: {
              profile: `https://bajredxtbeceozencuse.supabase.co/storage/v1/object/public/profile/profile-${id}-${randomNum}`,
            },
          });

          const err = error && error2;

          if (err) {
            toast.error(`We had trouble uploading the picture: ${err.message}`);
            throw err;
          }

          toast.success(
            profileUploadSuccess.message,
            profileUploadSuccess?.icon
              ? { icon: profileUploadSuccess.icon }
              : {},
          );
          return { data };
        },
        invalidatesTags: ["user"],
      }),
      updateDesc: builder.mutation({
        queryFn: async function ({ desc }) {
          const { error: err, data } = await supabase.auth.updateUser({
            data: {
              desc,
            },
          });
          if (err) {
            toast.error(
              `We had trouble changing the description: ${err.message}`,
            );
            throw err;
          }

          toast.success(
            descriptionChangeSuccess.message,
            descriptionChangeSuccess?.icon
              ? { icon: descriptionChangeSuccess.icon }
              : {},
          );
          return { data };
        },
        invalidatesTags: ["user"],
      }),
      updatePassword: builder.mutation({
        queryFn: async function ({ password }) {
          const { error, data } = await supabase.auth.updateUser({
            password,
          });

          if (error) {
            toast.error(
              `We had trouble changing the password: ${error.message}`,
            );
            throw error;
            return;
          }

          toast.success(
            passwordChangeSuccess.message,
            passwordChangeSuccess?.icon
              ? { icon: passwordChangeSuccess.icon }
              : {},
          );
          return { data };
        },
      }),
    };
  },
});

export const {
  useUploadProfileMutation,
  useUploadBackgroundMutation,
  useUpdateDescMutation,
  useUpdatePasswordMutation,
} = extendedApiSlice;
export default apiSlice.reducer;
