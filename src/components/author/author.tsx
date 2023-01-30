import React, { FC } from "react";
import Image from "next/image";

import { IAuthor } from "@/types";
import styles from "@/styles/author.module.css";

interface IAuthorProps extends IAuthor {}

export const Author: FC<IAuthorProps> = (props) => {
  return (
    <div className={`${styles.root}`}>
      <Image
        className={styles.image}
        src={props.image}
        alt={props.name}
        width={64}
        height={64}
      />
      <div className={`${styles.innerContainer} px-5 py-2`}>
        <h6 className="text-lg font-semibold text-primary-700">{props.name}</h6>
        <p className="text-xs text-primary-500"> {props.occupation} </p>
      </div>
    </div>
  );
};

export default Author;
