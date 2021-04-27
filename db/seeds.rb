user1 = User.create(email: "jmgorin1@gmail.com", password: "111111", password_confirmation: "111111")
user2 = User.create(email: "jgorin@conncoll.edu", password: "111111", password_confirmation: "111111")
user3 = User.create(email: "jmgoin98@gmail.com", password: "111111", password_confirmation: "111111")

Friendship.create(user: user1, friend_id: user2.id)
# Friendship.create(user: user1, friend_id: user3.id)

FriendRequest.create(sender_id: user1.id, receiver_id: user3.id)