import type { FC, ReactNode } from "react";

export interface SkeletonProps {
    /**
     * background of the loader componenet
     */
    background: string,

    /**
     * highlight color of the loader component
     */
    highlight: string

    /**
     * Children passed to the Skeleton Loader
     */
    children: ReactNode;
}


declare const SkeletonLoading: FC<SkeletonProps>;

export default SkeletonLoading;