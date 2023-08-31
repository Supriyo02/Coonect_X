import Avatar from "./Avatar";

export default function FriendInfo(){
    return(
        <div className="flex items-center gap-2">
                <div className=" pt-1">
                <Avatar />
                </div>
                <div>
                    <h3 className="text-lg font-bold">Koushani Roy</h3>
                    <div className=" text-sm leading-4">
                        5 mutual friends
                    </div>
                </div>
            </div>
    )
}