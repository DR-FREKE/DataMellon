import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { PreviousDiv, NumberDiv, NextDiv } from "./pagination.style";

export const Pagination = ({ total, totalPageNum, ...props }) => (
  <div className=" w-full flex justify-end items-center">
    {total > props.numberOnPage && (
      <>
        <PreviousDiv
          className="p-3"
          style={{ display: props.currentPage == 1 ? "none" : "flex" }}
        >
          <div
            className="flex justify-center items-center"
            onClick={props.handlePrevious}
          >
            <FiChevronLeft size={27} />
            <span>Previous</span>
          </div>
        </PreviousDiv>
        <NumberDiv className="px-5">
          <span>
            {props.currentPage}
            <small> of {Math.ceil(total / props.numberOnPage)}</small>
          </span>
        </NumberDiv>
        <NextDiv
          className="p-3"
          style={{
            display:
              props.currentPage == Math.ceil(props.total / props.numberOnPage)
                ? "none"
                : "flex",
          }}
        >
          <div
            className="flex justify-center items-center"
            onClick={props.handleNext}
          >
            <span>Next</span>
            <FiChevronRight size={27} />
          </div>
        </NextDiv>
      </>
    )}
  </div>
);
