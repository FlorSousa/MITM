import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import api from "../../../app/api";
import { showErrorMessage } from "../../../app/slices/message";
import { updateUser } from "../../auth/slices/auth";
import { warnNewPosts } from "../../feed/slices/newPosts";

const { useFollowMutation } = api.injectEndpoints({
    endpoints: build => ({
        follow: build.mutation({
            query: userId => ({
                url: `users/follow/${userId}`,
                method: "POST",
            }),
            invalidatesTags: (result, error, userId) => [
                { type: "User", id: userId },
            ],
            onQueryStarted: async (
                userId,
                { dispatch, getState, queryFulfilled }
            ) => {
                const { following } = getState().auth.user;

                try {
                    await queryFulfilled;

                    if (!following.includes(userId))
                        dispatch(updateUser({ following: [...following, userId] }));
                } catch {
                    dispatch(
                        showErrorMessage({
                            text: "Não foi possível atualizar as informações.",
                            suggestReload: true,
                        })
                    );
                }
            },
        }),
    }),
});

export default function useFollow({ id, hasPosts }) {
    const dispatch = useDispatch();
    const [request, result] = useFollowMutation();
    const { pathname } = useLocation();
    const follow = async () => {
        try {
            await request(id).unwrap();

            if (pathname === "/" && hasPosts) dispatch(warnNewPosts());
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };

    return [follow, result];
}
