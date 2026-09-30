"use client";

import React from "react";
import { Pagination, ConfigProvider } from "antd";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface CustomPaginationProps {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
    className?: string;
    showSizeChanger?: boolean;
    hideOnSinglePage?: boolean;
    disabled?: boolean;
}

/**
 * CustomPagination
 * Wraps Ant Design Pagination customized with ByteSpace design tokens:
 * - Lime active state (#D4FB20)
 * - Rounded-full pill page items
 * - Clean border chevrons (FiChevronLeft / FiChevronRight)
 * - Responsive sizing (36px mobile, 40px tablet/desktop)
 */
export default function CustomPagination({
    current,
    pageSize,
    total,
    onChange,
    className,
    showSizeChanger = false,
    hideOnSinglePage = true,
    disabled = false,
}: CustomPaginationProps) {
    return (
        <div className={cn("w-full flex items-center justify-center", className)}>
            <ConfigProvider
                theme={{
                    components: {
                        Pagination: {
                            itemActiveBg: "#D4FB20",
                            colorPrimary: "#040819",
                            colorPrimaryHover: "#040819",
                            itemSize: 40,
                            itemSizeSM: 36,
                            borderRadius: 9999,
                            colorText: "#475467",
                            colorTextDisabled: "#D0D5DD",
                            itemLinkBg: "transparent",
                        },
                    },
                }}
            >
                <Pagination
                    current={current}
                    pageSize={pageSize}
                    total={total}
                    onChange={onChange}
                    showSizeChanger={showSizeChanger}
                    hideOnSinglePage={hideOnSinglePage}
                    disabled={disabled}
                    className="bytespace-pagination"
                    itemRender={(_, type, originalElement) => {
                        if (type === "prev") {
                            return (
                                <span className="flex items-center justify-center size-full" aria-label="Previous Page">
                                    <FiChevronLeft className="size-4 sm:size-4.5" />
                                </span>
                            );
                        }
                        if (type === "next") {
                            return (
                                <span className="flex items-center justify-center size-full" aria-label="Next Page">
                                    <FiChevronRight className="size-4 sm:size-4.5" />
                                </span>
                            );
                        }
                        return originalElement;
                    }}
                />
            </ConfigProvider>
        </div>
    );
}
