-- 게시판파일
DROP TABLE IF EXISTS `final`.BOARDFILE;
CREATE TABLE `final`.BOARDFILE
(
    `BOARDFILE_ID`         BIGINT       NOT NULL AUTO_INCREMENT COMMENT '게시판파일코드',
    `BOARDFILE_BOARD_ID`   BIGINT       NOT NULL COMMENT '게시판코드',
    `BOARDFILE_NAME`       VARCHAR(255) NOT NULL COMMENT '게시판파일이름',
    `BOARDFILE_ORIGINNAME` VARCHAR(255) NOT NULL COMMENT '게시판파일원본이름',
    `BOARDFILE_PATH`       VARCHAR(255) NOT NULL COMMENT '게시판파일경로',
    PRIMARY KEY (`BOARDFILE_ID`)
) ENGINE = InnoDB COMMENT '게시판파일'
  AUTO_INCREMENT = 1;

ALTER TABLE `final`.BOARDFILE
    ADD CONSTRAINT `FK_BOARDFILE_BOARD` FOREIGN KEY (`BOARDFILE_BOARD_ID`) REFERENCES `final`.BOARD (`BOARD_ID`);