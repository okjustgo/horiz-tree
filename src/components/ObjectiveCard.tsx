import React, { useState, useRef } from "react";
import "./ObjectiveCard.css";
import classNames from "classnames";

export type ObjectiveCardProps = {};

export const ObjectiveCard: React.FC<ObjectiveCardProps> = props => {
  const [showChildren, setShowChildren] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const childrenDiv = useRef() as React.MutableRefObject<HTMLDivElement>;
  const myDiv = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <div className={classNames("ObjectiveCard")}>
      <div
        ref={myDiv}
        className={classNames("ObjectiveContent", { expanded: showDetail })}
        onClick={e => {
          if (showChildren) {
            setShowChildren(false);
          } else {
            setShowDetail(!showDetail);
          }
          setTimeout(() => {
            if (!!myDiv.current) {
              myDiv.current.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "center"
              });
            }
          }, 1);
          e.stopPropagation();
        }}
      />
      <React.Fragment>
        <div
          className={classNames("Level", "L1", "Overlapping", {
            hidden: showChildren
          })}
          onClick={e => {
            setShowChildren(true);
            setTimeout(() => {
              if (!!childrenDiv.current) {
                childrenDiv.current.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "center"
                });
              }
            }, 1);
            e.stopPropagation();
            setShowDetail(false);
          }}
        >
          {props.children && (
            <div className="ObjectiveCard">
              <div
                className="CollapsedChildren"
                style={{
                  marginLeft: "20px",
                  marginTop: "20px"
                }}
              />
              <div
                className="CollapsedChildren"
                style={{
                  marginLeft: "10px",
                  marginTop: "10px"
                }}
              />
              <div
                className="CollapsedChildren"
                style={{ marginLeft: "0px" }}
              />
            </div>
          )}
        </div>
        <div
          ref={childrenDiv}
          className={classNames("Level", "L1", "collapsed", {
            hidden: !showChildren
          })}
        >
          {props.children}
        </div>
      </React.Fragment>
    </div>
  );
};
