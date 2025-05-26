import { Fragment, ReactNode } from "react"

type BannerWrapperProps = {
    children: ReactNode;
};

const BannerWrapper = ({ children }: BannerWrapperProps) => {
    return <Fragment>
        {children}
    </Fragment>
}

export default BannerWrapper