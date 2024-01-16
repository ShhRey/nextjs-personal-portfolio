import { Image } from "primereact/image"

export default function MyAvatar() {
    const memoji = "path"

    return (
        <>
            <Image src={memoji} alt="my-avatar-image"/>
        </>
    )
}