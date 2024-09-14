"use client";
import React from "react";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import styles from "./UserCard.module.css";

function UserCard() {
  return (
    <div className={styles.card}>
      <AddToCartBtn />
    </div>
  );
}

export default UserCard;
