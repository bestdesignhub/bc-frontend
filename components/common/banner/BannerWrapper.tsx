import { Fragment, ReactNode } from "react"
import BannerComponent2 from "./banner-component2"

type BannerWrapperProps = {
    children: ReactNode;
};

const BannerWrapper = ({ children }: BannerWrapperProps) => {
    return <Fragment>
        <BannerComponent2 bannerData={{ bg_image: 'https://bespokecashemeres.s3.us-east-1.amazonaws.com/banner/banner3.webp' } as any} />
        {children}
    </Fragment>
}

export default BannerWrapper