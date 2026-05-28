import { Equal, IsArrayStrict, Iterator } from "../../helpers";
type RA = readonly any[];

/**
 * WARNING: DO NOT touch the code starting with [single keyword like Concat / peel etc][number] - its unrolled and if edited may cause tsserver to hang,
 * this is code generated with a script
 * 
 * while trying to implement the flatten logic 
 * the issue was that using recursion wasnt very sucessful
 * and chaining piped based operations (not related to `Pipe`) 
 * increased type checking time dramatically
 * 
 * the longest line (the `Concat1000` type) is roughly 30000 characters long
 * but now this is able to concatenate 
 * upto 9999 Array items in a single step rather than relying on recursion
 * 
 * so it was necessary to write down long inference of items
 * However it takes a lot of space, but at a smaller cost of the symbol table  
 * 
 * also DO NOT REMOVE THE //@prettier-ignore
 * its the only thing keeping the line count from going from 600 lines to over 7000
 * 
 * script functions to generate with
 * ```js
 * function concat(amount) {return `type Concat${amount}<T extends readonly RA[]>=T extends [${Array(amount).fill(0).map((v, i) => i + 1).map((i) => `infer I${i} extends RA`).join(", ")}, ...infer Rest extends readonly RA[]] ? [[${Array(amount).fill(0).map((v, i) => i + 1).map((i) => `...I${i}`).join(", ")}], Rest] : [[], T]`;}
 * ```
 * 
 * ```js
 * function peelLeft(amount) {return `type PeelLeft${amount}<T extends RA>=T extends [${Array(amount).fill(0).map((v, i) => i + 1).map((i) => `infer I${i}`).join(", ")}, ...infer Rest extends RA] ? [[${Array(amount).fill(0).map((v, i) => i + 1).map((i) => `[I${i}]`).join(", ")}], Rest] : [[], T]`;}
 * ```
 * 
 * ```js
 * function peelRight(amount) {return `type PeelRight${amount}<T extends RA>=T extends [...infer Rest extends RA, ${Array(amount).fill(0).map((v, i) => i + 1).map((i) => `infer I${i}`).join(", ")}] ? [[${Array(amount).fill(0).map((v, i) => i + 1).map((i) => `[I${i}]`).join(", ")}], Rest] : [[], T]`;}
 * ```
 * 
 * the passes were written by hand but they are very simple.
 * those can be edited if you want
 * 
 */

//#region Concat (because ts reaches instatiation limit with recursion)
//#region 1000s (have lots of inference)
/**
 * takes the first 1000 items and a ...Rest element and turns it into [ConcattedItems,Rest]
 */
//prettier-ignore
type Concat1000<T extends readonly RA[]>=T extends[infer I1 extends RA,infer I2 extends RA,infer I3 extends RA,infer I4 extends RA,infer I5 extends RA,infer I6 extends RA,infer I7 extends RA,infer I8 extends RA,infer I9 extends RA,infer I10 extends RA,infer I11 extends RA,infer I12 extends RA,infer I13 extends RA,infer I14 extends RA,infer I15 extends RA,infer I16 extends RA,infer I17 extends RA,infer I18 extends RA,infer I19 extends RA,infer I20 extends RA,infer I21 extends RA,infer I22 extends RA,infer I23 extends RA,infer I24 extends RA,infer I25 extends RA,infer I26 extends RA,infer I27 extends RA,infer I28 extends RA,infer I29 extends RA,infer I30 extends RA,infer I31 extends RA,infer I32 extends RA,infer I33 extends RA,infer I34 extends RA,infer I35 extends RA,infer I36 extends RA,infer I37 extends RA,infer I38 extends RA,infer I39 extends RA,infer I40 extends RA,infer I41 extends RA,infer I42 extends RA,infer I43 extends RA,infer I44 extends RA,infer I45 extends RA,infer I46 extends RA,infer I47 extends RA,infer I48 extends RA,infer I49 extends RA,infer I50 extends RA,infer I51 extends RA,infer I52 extends RA,infer I53 extends RA,infer I54 extends RA,infer I55 extends RA,infer I56 extends RA,infer I57 extends RA,infer I58 extends RA,infer I59 extends RA,infer I60 extends RA,infer I61 extends RA,infer I62 extends RA,infer I63 extends RA,infer I64 extends RA,infer I65 extends RA,infer I66 extends RA,infer I67 extends RA,infer I68 extends RA,infer I69 extends RA,infer I70 extends RA,infer I71 extends RA,infer I72 extends RA,infer I73 extends RA,infer I74 extends RA,infer I75 extends RA,infer I76 extends RA,infer I77 extends RA,infer I78 extends RA,infer I79 extends RA,infer I80 extends RA,infer I81 extends RA,infer I82 extends RA,infer I83 extends RA,infer I84 extends RA,infer I85 extends RA,infer I86 extends RA,infer I87 extends RA,infer I88 extends RA,infer I89 extends RA,infer I90 extends RA,infer I91 extends RA,infer I92 extends RA,infer I93 extends RA,infer I94 extends RA,infer I95 extends RA,infer I96 extends RA,infer I97 extends RA,infer I98 extends RA,infer I99 extends RA,infer I100 extends RA,infer I101 extends RA,infer I102 extends RA,infer I103 extends RA,infer I104 extends RA,infer I105 extends RA,infer I106 extends RA,infer I107 extends RA,infer I108 extends RA,infer I109 extends RA,infer I110 extends RA,infer I111 extends RA,infer I112 extends RA,infer I113 extends RA,infer I114 extends RA,infer I115 extends RA,infer I116 extends RA,infer I117 extends RA,infer I118 extends RA,infer I119 extends RA,infer I120 extends RA,infer I121 extends RA,infer I122 extends RA,infer I123 extends RA,infer I124 extends RA,infer I125 extends RA,infer I126 extends RA,infer I127 extends RA,infer I128 extends RA,infer I129 extends RA,infer I130 extends RA,infer I131 extends RA,infer I132 extends RA,infer I133 extends RA,infer I134 extends RA,infer I135 extends RA,infer I136 extends RA,infer I137 extends RA,infer I138 extends RA,infer I139 extends RA,infer I140 extends RA,infer I141 extends RA,infer I142 extends RA,infer I143 extends RA,infer I144 extends RA,infer I145 extends RA,infer I146 extends RA,infer I147 extends RA,infer I148 extends RA,infer I149 extends RA,infer I150 extends RA,infer I151 extends RA,infer I152 extends RA,infer I153 extends RA,infer I154 extends RA,infer I155 extends RA,infer I156 extends RA,infer I157 extends RA,infer I158 extends RA,infer I159 extends RA,infer I160 extends RA,infer I161 extends RA,infer I162 extends RA,infer I163 extends RA,infer I164 extends RA,infer I165 extends RA,infer I166 extends RA,infer I167 extends RA,infer I168 extends RA,infer I169 extends RA,infer I170 extends RA,infer I171 extends RA,infer I172 extends RA,infer I173 extends RA,infer I174 extends RA,infer I175 extends RA,infer I176 extends RA,infer I177 extends RA,infer I178 extends RA,infer I179 extends RA,infer I180 extends RA,infer I181 extends RA,infer I182 extends RA,infer I183 extends RA,infer I184 extends RA,infer I185 extends RA,infer I186 extends RA,infer I187 extends RA,infer I188 extends RA,infer I189 extends RA,infer I190 extends RA,infer I191 extends RA,infer I192 extends RA,infer I193 extends RA,infer I194 extends RA,infer I195 extends RA,infer I196 extends RA,infer I197 extends RA,infer I198 extends RA,infer I199 extends RA,infer I200 extends RA,infer I201 extends RA,infer I202 extends RA,infer I203 extends RA,infer I204 extends RA,infer I205 extends RA,infer I206 extends RA,infer I207 extends RA,infer I208 extends RA,infer I209 extends RA,infer I210 extends RA,infer I211 extends RA,infer I212 extends RA,infer I213 extends RA,infer I214 extends RA,infer I215 extends RA,infer I216 extends RA,infer I217 extends RA,infer I218 extends RA,infer I219 extends RA,infer I220 extends RA,infer I221 extends RA,infer I222 extends RA,infer I223 extends RA,infer I224 extends RA,infer I225 extends RA,infer I226 extends RA,infer I227 extends RA,infer I228 extends RA,infer I229 extends RA,infer I230 extends RA,infer I231 extends RA,infer I232 extends RA,infer I233 extends RA,infer I234 extends RA,infer I235 extends RA,infer I236 extends RA,infer I237 extends RA,infer I238 extends RA,infer I239 extends RA,infer I240 extends RA,infer I241 extends RA,infer I242 extends RA,infer I243 extends RA,infer I244 extends RA,infer I245 extends RA,infer I246 extends RA,infer I247 extends RA,infer I248 extends RA,infer I249 extends RA,infer I250 extends RA,infer I251 extends RA,infer I252 extends RA,infer I253 extends RA,infer I254 extends RA,infer I255 extends RA,infer I256 extends RA,infer I257 extends RA,infer I258 extends RA,infer I259 extends RA,infer I260 extends RA,infer I261 extends RA,infer I262 extends RA,infer I263 extends RA,infer I264 extends RA,infer I265 extends RA,infer I266 extends RA,infer I267 extends RA,infer I268 extends RA,infer I269 extends RA,infer I270 extends RA,infer I271 extends RA,infer I272 extends RA,infer I273 extends RA,infer I274 extends RA,infer I275 extends RA,infer I276 extends RA,infer I277 extends RA,infer I278 extends RA,infer I279 extends RA,infer I280 extends RA,infer I281 extends RA,infer I282 extends RA,infer I283 extends RA,infer I284 extends RA,infer I285 extends RA,infer I286 extends RA,infer I287 extends RA,infer I288 extends RA,infer I289 extends RA,infer I290 extends RA,infer I291 extends RA,infer I292 extends RA,infer I293 extends RA,infer I294 extends RA,infer I295 extends RA,infer I296 extends RA,infer I297 extends RA,infer I298 extends RA,infer I299 extends RA,infer I300 extends RA,infer I301 extends RA,infer I302 extends RA,infer I303 extends RA,infer I304 extends RA,infer I305 extends RA,infer I306 extends RA,infer I307 extends RA,infer I308 extends RA,infer I309 extends RA,infer I310 extends RA,infer I311 extends RA,infer I312 extends RA,infer I313 extends RA,infer I314 extends RA,infer I315 extends RA,infer I316 extends RA,infer I317 extends RA,infer I318 extends RA,infer I319 extends RA,infer I320 extends RA,infer I321 extends RA,infer I322 extends RA,infer I323 extends RA,infer I324 extends RA,infer I325 extends RA,infer I326 extends RA,infer I327 extends RA,infer I328 extends RA,infer I329 extends RA,infer I330 extends RA,infer I331 extends RA,infer I332 extends RA,infer I333 extends RA,infer I334 extends RA,infer I335 extends RA,infer I336 extends RA,infer I337 extends RA,infer I338 extends RA,infer I339 extends RA,infer I340 extends RA,infer I341 extends RA,infer I342 extends RA,infer I343 extends RA,infer I344 extends RA,infer I345 extends RA,infer I346 extends RA,infer I347 extends RA,infer I348 extends RA,infer I349 extends RA,infer I350 extends RA,infer I351 extends RA,infer I352 extends RA,infer I353 extends RA,infer I354 extends RA,infer I355 extends RA,infer I356 extends RA,infer I357 extends RA,infer I358 extends RA,infer I359 extends RA,infer I360 extends RA,infer I361 extends RA,infer I362 extends RA,infer I363 extends RA,infer I364 extends RA,infer I365 extends RA,infer I366 extends RA,infer I367 extends RA,infer I368 extends RA,infer I369 extends RA,infer I370 extends RA,infer I371 extends RA,infer I372 extends RA,infer I373 extends RA,infer I374 extends RA,infer I375 extends RA,infer I376 extends RA,infer I377 extends RA,infer I378 extends RA,infer I379 extends RA,infer I380 extends RA,infer I381 extends RA,infer I382 extends RA,infer I383 extends RA,infer I384 extends RA,infer I385 extends RA,infer I386 extends RA,infer I387 extends RA,infer I388 extends RA,infer I389 extends RA,infer I390 extends RA,infer I391 extends RA,infer I392 extends RA,infer I393 extends RA,infer I394 extends RA,infer I395 extends RA,infer I396 extends RA,infer I397 extends RA,infer I398 extends RA,infer I399 extends RA,infer I400 extends RA,infer I401 extends RA,infer I402 extends RA,infer I403 extends RA,infer I404 extends RA,infer I405 extends RA,infer I406 extends RA,infer I407 extends RA,infer I408 extends RA,infer I409 extends RA,infer I410 extends RA,infer I411 extends RA,infer I412 extends RA,infer I413 extends RA,infer I414 extends RA,infer I415 extends RA,infer I416 extends RA,infer I417 extends RA,infer I418 extends RA,infer I419 extends RA,infer I420 extends RA,infer I421 extends RA,infer I422 extends RA,infer I423 extends RA,infer I424 extends RA,infer I425 extends RA,infer I426 extends RA,infer I427 extends RA,infer I428 extends RA,infer I429 extends RA,infer I430 extends RA,infer I431 extends RA,infer I432 extends RA,infer I433 extends RA,infer I434 extends RA,infer I435 extends RA,infer I436 extends RA,infer I437 extends RA,infer I438 extends RA,infer I439 extends RA,infer I440 extends RA,infer I441 extends RA,infer I442 extends RA,infer I443 extends RA,infer I444 extends RA,infer I445 extends RA,infer I446 extends RA,infer I447 extends RA,infer I448 extends RA,infer I449 extends RA,infer I450 extends RA,infer I451 extends RA,infer I452 extends RA,infer I453 extends RA,infer I454 extends RA,infer I455 extends RA,infer I456 extends RA,infer I457 extends RA,infer I458 extends RA,infer I459 extends RA,infer I460 extends RA,infer I461 extends RA,infer I462 extends RA,infer I463 extends RA,infer I464 extends RA,infer I465 extends RA,infer I466 extends RA,infer I467 extends RA,infer I468 extends RA,infer I469 extends RA,infer I470 extends RA,infer I471 extends RA,infer I472 extends RA,infer I473 extends RA,infer I474 extends RA,infer I475 extends RA,infer I476 extends RA,infer I477 extends RA,infer I478 extends RA,infer I479 extends RA,infer I480 extends RA,infer I481 extends RA,infer I482 extends RA,infer I483 extends RA,infer I484 extends RA,infer I485 extends RA,infer I486 extends RA,infer I487 extends RA,infer I488 extends RA,infer I489 extends RA,infer I490 extends RA,infer I491 extends RA,infer I492 extends RA,infer I493 extends RA,infer I494 extends RA,infer I495 extends RA,infer I496 extends RA,infer I497 extends RA,infer I498 extends RA,infer I499 extends RA,infer I500 extends RA,infer I501 extends RA,infer I502 extends RA,infer I503 extends RA,infer I504 extends RA,infer I505 extends RA,infer I506 extends RA,infer I507 extends RA,infer I508 extends RA,infer I509 extends RA,infer I510 extends RA,infer I511 extends RA,infer I512 extends RA,infer I513 extends RA,infer I514 extends RA,infer I515 extends RA,infer I516 extends RA,infer I517 extends RA,infer I518 extends RA,infer I519 extends RA,infer I520 extends RA,infer I521 extends RA,infer I522 extends RA,infer I523 extends RA,infer I524 extends RA,infer I525 extends RA,infer I526 extends RA,infer I527 extends RA,infer I528 extends RA,infer I529 extends RA,infer I530 extends RA,infer I531 extends RA,infer I532 extends RA,infer I533 extends RA,infer I534 extends RA,infer I535 extends RA,infer I536 extends RA,infer I537 extends RA,infer I538 extends RA,infer I539 extends RA,infer I540 extends RA,infer I541 extends RA,infer I542 extends RA,infer I543 extends RA,infer I544 extends RA,infer I545 extends RA,infer I546 extends RA,infer I547 extends RA,infer I548 extends RA,infer I549 extends RA,infer I550 extends RA,infer I551 extends RA,infer I552 extends RA,infer I553 extends RA,infer I554 extends RA,infer I555 extends RA,infer I556 extends RA,infer I557 extends RA,infer I558 extends RA,infer I559 extends RA,infer I560 extends RA,infer I561 extends RA,infer I562 extends RA,infer I563 extends RA,infer I564 extends RA,infer I565 extends RA,infer I566 extends RA,infer I567 extends RA,infer I568 extends RA,infer I569 extends RA,infer I570 extends RA,infer I571 extends RA,infer I572 extends RA,infer I573 extends RA,infer I574 extends RA,infer I575 extends RA,infer I576 extends RA,infer I577 extends RA,infer I578 extends RA,infer I579 extends RA,infer I580 extends RA,infer I581 extends RA,infer I582 extends RA,infer I583 extends RA,infer I584 extends RA,infer I585 extends RA,infer I586 extends RA,infer I587 extends RA,infer I588 extends RA,infer I589 extends RA,infer I590 extends RA,infer I591 extends RA,infer I592 extends RA,infer I593 extends RA,infer I594 extends RA,infer I595 extends RA,infer I596 extends RA,infer I597 extends RA,infer I598 extends RA,infer I599 extends RA,infer I600 extends RA,infer I601 extends RA,infer I602 extends RA,infer I603 extends RA,infer I604 extends RA,infer I605 extends RA,infer I606 extends RA,infer I607 extends RA,infer I608 extends RA,infer I609 extends RA,infer I610 extends RA,infer I611 extends RA,infer I612 extends RA,infer I613 extends RA,infer I614 extends RA,infer I615 extends RA,infer I616 extends RA,infer I617 extends RA,infer I618 extends RA,infer I619 extends RA,infer I620 extends RA,infer I621 extends RA,infer I622 extends RA,infer I623 extends RA,infer I624 extends RA,infer I625 extends RA,infer I626 extends RA,infer I627 extends RA,infer I628 extends RA,infer I629 extends RA,infer I630 extends RA,infer I631 extends RA,infer I632 extends RA,infer I633 extends RA,infer I634 extends RA,infer I635 extends RA,infer I636 extends RA,infer I637 extends RA,infer I638 extends RA,infer I639 extends RA,infer I640 extends RA,infer I641 extends RA,infer I642 extends RA,infer I643 extends RA,infer I644 extends RA,infer I645 extends RA,infer I646 extends RA,infer I647 extends RA,infer I648 extends RA,infer I649 extends RA,infer I650 extends RA,infer I651 extends RA,infer I652 extends RA,infer I653 extends RA,infer I654 extends RA,infer I655 extends RA,infer I656 extends RA,infer I657 extends RA,infer I658 extends RA,infer I659 extends RA,infer I660 extends RA,infer I661 extends RA,infer I662 extends RA,infer I663 extends RA,infer I664 extends RA,infer I665 extends RA,infer I666 extends RA,infer I667 extends RA,infer I668 extends RA,infer I669 extends RA,infer I670 extends RA,infer I671 extends RA,infer I672 extends RA,infer I673 extends RA,infer I674 extends RA,infer I675 extends RA,infer I676 extends RA,infer I677 extends RA,infer I678 extends RA,infer I679 extends RA,infer I680 extends RA,infer I681 extends RA,infer I682 extends RA,infer I683 extends RA,infer I684 extends RA,infer I685 extends RA,infer I686 extends RA,infer I687 extends RA,infer I688 extends RA,infer I689 extends RA,infer I690 extends RA,infer I691 extends RA,infer I692 extends RA,infer I693 extends RA,infer I694 extends RA,infer I695 extends RA,infer I696 extends RA,infer I697 extends RA,infer I698 extends RA,infer I699 extends RA,infer I700 extends RA,infer I701 extends RA,infer I702 extends RA,infer I703 extends RA,infer I704 extends RA,infer I705 extends RA,infer I706 extends RA,infer I707 extends RA,infer I708 extends RA,infer I709 extends RA,infer I710 extends RA,infer I711 extends RA,infer I712 extends RA,infer I713 extends RA,infer I714 extends RA,infer I715 extends RA,infer I716 extends RA,infer I717 extends RA,infer I718 extends RA,infer I719 extends RA,infer I720 extends RA,infer I721 extends RA,infer I722 extends RA,infer I723 extends RA,infer I724 extends RA,infer I725 extends RA,infer I726 extends RA,infer I727 extends RA,infer I728 extends RA,infer I729 extends RA,infer I730 extends RA,infer I731 extends RA,infer I732 extends RA,infer I733 extends RA,infer I734 extends RA,infer I735 extends RA,infer I736 extends RA,infer I737 extends RA,infer I738 extends RA,infer I739 extends RA,infer I740 extends RA,infer I741 extends RA,infer I742 extends RA,infer I743 extends RA,infer I744 extends RA,infer I745 extends RA,infer I746 extends RA,infer I747 extends RA,infer I748 extends RA,infer I749 extends RA,infer I750 extends RA,infer I751 extends RA,infer I752 extends RA,infer I753 extends RA,infer I754 extends RA,infer I755 extends RA,infer I756 extends RA,infer I757 extends RA,infer I758 extends RA,infer I759 extends RA,infer I760 extends RA,infer I761 extends RA,infer I762 extends RA,infer I763 extends RA,infer I764 extends RA,infer I765 extends RA,infer I766 extends RA,infer I767 extends RA,infer I768 extends RA,infer I769 extends RA,infer I770 extends RA,infer I771 extends RA,infer I772 extends RA,infer I773 extends RA,infer I774 extends RA,infer I775 extends RA,infer I776 extends RA,infer I777 extends RA,infer I778 extends RA,infer I779 extends RA,infer I780 extends RA,infer I781 extends RA,infer I782 extends RA,infer I783 extends RA,infer I784 extends RA,infer I785 extends RA,infer I786 extends RA,infer I787 extends RA,infer I788 extends RA,infer I789 extends RA,infer I790 extends RA,infer I791 extends RA,infer I792 extends RA,infer I793 extends RA,infer I794 extends RA,infer I795 extends RA,infer I796 extends RA,infer I797 extends RA,infer I798 extends RA,infer I799 extends RA,infer I800 extends RA,infer I801 extends RA,infer I802 extends RA,infer I803 extends RA,infer I804 extends RA,infer I805 extends RA,infer I806 extends RA,infer I807 extends RA,infer I808 extends RA,infer I809 extends RA,infer I810 extends RA,infer I811 extends RA,infer I812 extends RA,infer I813 extends RA,infer I814 extends RA,infer I815 extends RA,infer I816 extends RA,infer I817 extends RA,infer I818 extends RA,infer I819 extends RA,infer I820 extends RA,infer I821 extends RA,infer I822 extends RA,infer I823 extends RA,infer I824 extends RA,infer I825 extends RA,infer I826 extends RA,infer I827 extends RA,infer I828 extends RA,infer I829 extends RA,infer I830 extends RA,infer I831 extends RA,infer I832 extends RA,infer I833 extends RA,infer I834 extends RA,infer I835 extends RA,infer I836 extends RA,infer I837 extends RA,infer I838 extends RA,infer I839 extends RA,infer I840 extends RA,infer I841 extends RA,infer I842 extends RA,infer I843 extends RA,infer I844 extends RA,infer I845 extends RA,infer I846 extends RA,infer I847 extends RA,infer I848 extends RA,infer I849 extends RA,infer I850 extends RA,infer I851 extends RA,infer I852 extends RA,infer I853 extends RA,infer I854 extends RA,infer I855 extends RA,infer I856 extends RA,infer I857 extends RA,infer I858 extends RA,infer I859 extends RA,infer I860 extends RA,infer I861 extends RA,infer I862 extends RA,infer I863 extends RA,infer I864 extends RA,infer I865 extends RA,infer I866 extends RA,infer I867 extends RA,infer I868 extends RA,infer I869 extends RA,infer I870 extends RA,infer I871 extends RA,infer I872 extends RA,infer I873 extends RA,infer I874 extends RA,infer I875 extends RA,infer I876 extends RA,infer I877 extends RA,infer I878 extends RA,infer I879 extends RA,infer I880 extends RA,infer I881 extends RA,infer I882 extends RA,infer I883 extends RA,infer I884 extends RA,infer I885 extends RA,infer I886 extends RA,infer I887 extends RA,infer I888 extends RA,infer I889 extends RA,infer I890 extends RA,infer I891 extends RA,infer I892 extends RA,infer I893 extends RA,infer I894 extends RA,infer I895 extends RA,infer I896 extends RA,infer I897 extends RA,infer I898 extends RA,infer I899 extends RA,infer I900 extends RA,infer I901 extends RA,infer I902 extends RA,infer I903 extends RA,infer I904 extends RA,infer I905 extends RA,infer I906 extends RA,infer I907 extends RA,infer I908 extends RA,infer I909 extends RA,infer I910 extends RA,infer I911 extends RA,infer I912 extends RA,infer I913 extends RA,infer I914 extends RA,infer I915 extends RA,infer I916 extends RA,infer I917 extends RA,infer I918 extends RA,infer I919 extends RA,infer I920 extends RA,infer I921 extends RA,infer I922 extends RA,infer I923 extends RA,infer I924 extends RA,infer I925 extends RA,infer I926 extends RA,infer I927 extends RA,infer I928 extends RA,infer I929 extends RA,infer I930 extends RA,infer I931 extends RA,infer I932 extends RA,infer I933 extends RA,infer I934 extends RA,infer I935 extends RA,infer I936 extends RA,infer I937 extends RA,infer I938 extends RA,infer I939 extends RA,infer I940 extends RA,infer I941 extends RA,infer I942 extends RA,infer I943 extends RA,infer I944 extends RA,infer I945 extends RA,infer I946 extends RA,infer I947 extends RA,infer I948 extends RA,infer I949 extends RA,infer I950 extends RA,infer I951 extends RA,infer I952 extends RA,infer I953 extends RA,infer I954 extends RA,infer I955 extends RA,infer I956 extends RA,infer I957 extends RA,infer I958 extends RA,infer I959 extends RA,infer I960 extends RA,infer I961 extends RA,infer I962 extends RA,infer I963 extends RA,infer I964 extends RA,infer I965 extends RA,infer I966 extends RA,infer I967 extends RA,infer I968 extends RA,infer I969 extends RA,infer I970 extends RA,infer I971 extends RA,infer I972 extends RA,infer I973 extends RA,infer I974 extends RA,infer I975 extends RA,infer I976 extends RA,infer I977 extends RA,infer I978 extends RA,infer I979 extends RA,infer I980 extends RA,infer I981 extends RA,infer I982 extends RA,infer I983 extends RA,infer I984 extends RA,infer I985 extends RA,infer I986 extends RA,infer I987 extends RA,infer I988 extends RA,infer I989 extends RA,infer I990 extends RA,infer I991 extends RA,infer I992 extends RA,infer I993 extends RA,infer I994 extends RA,infer I995 extends RA,infer I996 extends RA,infer I997 extends RA,infer I998 extends RA,infer I999 extends RA,infer I1000 extends RA,...infer Rest]?[[...I1,...I2,...I3,...I4,...I5,...I6,...I7,...I8,...I9,...I10,...I11,...I12,...I13,...I14,...I15,...I16,...I17,...I18,...I19,...I20,...I21,...I22,...I23,...I24,...I25,...I26,...I27,...I28,...I29,...I30,...I31,...I32,...I33,...I34,...I35,...I36,...I37,...I38,...I39,...I40,...I41,...I42,...I43,...I44,...I45,...I46,...I47,...I48,...I49,...I50,...I51,...I52,...I53,...I54,...I55,...I56,...I57,...I58,...I59,...I60,...I61,...I62,...I63,...I64,...I65,...I66,...I67,...I68,...I69,...I70,...I71,...I72,...I73,...I74,...I75,...I76,...I77,...I78,...I79,...I80,...I81,...I82,...I83,...I84,...I85,...I86,...I87,...I88,...I89,...I90,...I91,...I92,...I93,...I94,...I95,...I96,...I97,...I98,...I99,...I100,...I101,...I102,...I103,...I104,...I105,...I106,...I107,...I108,...I109,...I110,...I111,...I112,...I113,...I114,...I115,...I116,...I117,...I118,...I119,...I120,...I121,...I122,...I123,...I124,...I125,...I126,...I127,...I128,...I129,...I130,...I131,...I132,...I133,...I134,...I135,...I136,...I137,...I138,...I139,...I140,...I141,...I142,...I143,...I144,...I145,...I146,...I147,...I148,...I149,...I150,...I151,...I152,...I153,...I154,...I155,...I156,...I157,...I158,...I159,...I160,...I161,...I162,...I163,...I164,...I165,...I166,...I167,...I168,...I169,...I170,...I171,...I172,...I173,...I174,...I175,...I176,...I177,...I178,...I179,...I180,...I181,...I182,...I183,...I184,...I185,...I186,...I187,...I188,...I189,...I190,...I191,...I192,...I193,...I194,...I195,...I196,...I197,...I198,...I199,...I200,...I201,...I202,...I203,...I204,...I205,...I206,...I207,...I208,...I209,...I210,...I211,...I212,...I213,...I214,...I215,...I216,...I217,...I218,...I219,...I220,...I221,...I222,...I223,...I224,...I225,...I226,...I227,...I228,...I229,...I230,...I231,...I232,...I233,...I234,...I235,...I236,...I237,...I238,...I239,...I240,...I241,...I242,...I243,...I244,...I245,...I246,...I247,...I248,...I249,...I250,...I251,...I252,...I253,...I254,...I255,...I256,...I257,...I258,...I259,...I260,...I261,...I262,...I263,...I264,...I265,...I266,...I267,...I268,...I269,...I270,...I271,...I272,...I273,...I274,...I275,...I276,...I277,...I278,...I279,...I280,...I281,...I282,...I283,...I284,...I285,...I286,...I287,...I288,...I289,...I290,...I291,...I292,...I293,...I294,...I295,...I296,...I297,...I298,...I299,...I300,...I301,...I302,...I303,...I304,...I305,...I306,...I307,...I308,...I309,...I310,...I311,...I312,...I313,...I314,...I315,...I316,...I317,...I318,...I319,...I320,...I321,...I322,...I323,...I324,...I325,...I326,...I327,...I328,...I329,...I330,...I331,...I332,...I333,...I334,...I335,...I336,...I337,...I338,...I339,...I340,...I341,...I342,...I343,...I344,...I345,...I346,...I347,...I348,...I349,...I350,...I351,...I352,...I353,...I354,...I355,...I356,...I357,...I358,...I359,...I360,...I361,...I362,...I363,...I364,...I365,...I366,...I367,...I368,...I369,...I370,...I371,...I372,...I373,...I374,...I375,...I376,...I377,...I378,...I379,...I380,...I381,...I382,...I383,...I384,...I385,...I386,...I387,...I388,...I389,...I390,...I391,...I392,...I393,...I394,...I395,...I396,...I397,...I398,...I399,...I400,...I401,...I402,...I403,...I404,...I405,...I406,...I407,...I408,...I409,...I410,...I411,...I412,...I413,...I414,...I415,...I416,...I417,...I418,...I419,...I420,...I421,...I422,...I423,...I424,...I425,...I426,...I427,...I428,...I429,...I430,...I431,...I432,...I433,...I434,...I435,...I436,...I437,...I438,...I439,...I440,...I441,...I442,...I443,...I444,...I445,...I446,...I447,...I448,...I449,...I450,...I451,...I452,...I453,...I454,...I455,...I456,...I457,...I458,...I459,...I460,...I461,...I462,...I463,...I464,...I465,...I466,...I467,...I468,...I469,...I470,...I471,...I472,...I473,...I474,...I475,...I476,...I477,...I478,...I479,...I480,...I481,...I482,...I483,...I484,...I485,...I486,...I487,...I488,...I489,...I490,...I491,...I492,...I493,...I494,...I495,...I496,...I497,...I498,...I499,...I500,...I501,...I502,...I503,...I504,...I505,...I506,...I507,...I508,...I509,...I510,...I511,...I512,...I513,...I514,...I515,...I516,...I517,...I518,...I519,...I520,...I521,...I522,...I523,...I524,...I525,...I526,...I527,...I528,...I529,...I530,...I531,...I532,...I533,...I534,...I535,...I536,...I537,...I538,...I539,...I540,...I541,...I542,...I543,...I544,...I545,...I546,...I547,...I548,...I549,...I550,...I551,...I552,...I553,...I554,...I555,...I556,...I557,...I558,...I559,...I560,...I561,...I562,...I563,...I564,...I565,...I566,...I567,...I568,...I569,...I570,...I571,...I572,...I573,...I574,...I575,...I576,...I577,...I578,...I579,...I580,...I581,...I582,...I583,...I584,...I585,...I586,...I587,...I588,...I589,...I590,...I591,...I592,...I593,...I594,...I595,...I596,...I597,...I598,...I599,...I600,...I601,...I602,...I603,...I604,...I605,...I606,...I607,...I608,...I609,...I610,...I611,...I612,...I613,...I614,...I615,...I616,...I617,...I618,...I619,...I620,...I621,...I622,...I623,...I624,...I625,...I626,...I627,...I628,...I629,...I630,...I631,...I632,...I633,...I634,...I635,...I636,...I637,...I638,...I639,...I640,...I641,...I642,...I643,...I644,...I645,...I646,...I647,...I648,...I649,...I650,...I651,...I652,...I653,...I654,...I655,...I656,...I657,...I658,...I659,...I660,...I661,...I662,...I663,...I664,...I665,...I666,...I667,...I668,...I669,...I670,...I671,...I672,...I673,...I674,...I675,...I676,...I677,...I678,...I679,...I680,...I681,...I682,...I683,...I684,...I685,...I686,...I687,...I688,...I689,...I690,...I691,...I692,...I693,...I694,...I695,...I696,...I697,...I698,...I699,...I700,...I701,...I702,...I703,...I704,...I705,...I706,...I707,...I708,...I709,...I710,...I711,...I712,...I713,...I714,...I715,...I716,...I717,...I718,...I719,...I720,...I721,...I722,...I723,...I724,...I725,...I726,...I727,...I728,...I729,...I730,...I731,...I732,...I733,...I734,...I735,...I736,...I737,...I738,...I739,...I740,...I741,...I742,...I743,...I744,...I745,...I746,...I747,...I748,...I749,...I750,...I751,...I752,...I753,...I754,...I755,...I756,...I757,...I758,...I759,...I760,...I761,...I762,...I763,...I764,...I765,...I766,...I767,...I768,...I769,...I770,...I771,...I772,...I773,...I774,...I775,...I776,...I777,...I778,...I779,...I780,...I781,...I782,...I783,...I784,...I785,...I786,...I787,...I788,...I789,...I790,...I791,...I792,...I793,...I794,...I795,...I796,...I797,...I798,...I799,...I800,...I801,...I802,...I803,...I804,...I805,...I806,...I807,...I808,...I809,...I810,...I811,...I812,...I813,...I814,...I815,...I816,...I817,...I818,...I819,...I820,...I821,...I822,...I823,...I824,...I825,...I826,...I827,...I828,...I829,...I830,...I831,...I832,...I833,...I834,...I835,...I836,...I837,...I838,...I839,...I840,...I841,...I842,...I843,...I844,...I845,...I846,...I847,...I848,...I849,...I850,...I851,...I852,...I853,...I854,...I855,...I856,...I857,...I858,...I859,...I860,...I861,...I862,...I863,...I864,...I865,...I866,...I867,...I868,...I869,...I870,...I871,...I872,...I873,...I874,...I875,...I876,...I877,...I878,...I879,...I880,...I881,...I882,...I883,...I884,...I885,...I886,...I887,...I888,...I889,...I890,...I891,...I892,...I893,...I894,...I895,...I896,...I897,...I898,...I899,...I900,...I901,...I902,...I903,...I904,...I905,...I906,...I907,...I908,...I909,...I910,...I911,...I912,...I913,...I914,...I915,...I916,...I917,...I918,...I919,...I920,...I921,...I922,...I923,...I924,...I925,...I926,...I927,...I928,...I929,...I930,...I931,...I932,...I933,...I934,...I935,...I936,...I937,...I938,...I939,...I940,...I941,...I942,...I943,...I944,...I945,...I946,...I947,...I948,...I949,...I950,...I951,...I952,...I953,...I954,...I955,...I956,...I957,...I958,...I959,...I960,...I961,...I962,...I963,...I964,...I965,...I966,...I967,...I968,...I969,...I970,...I971,...I972,...I973,...I974,...I975,...I976,...I977,...I978,...I979,...I980,...I981,...I982,...I983,...I984,...I985,...I986,...I987,...I988,...I989,...I990,...I991,...I992,...I993,...I994,...I995,...I996,...I997,...I998,...I999,...I1000],Rest]:[[],T];
//#endregion
//#region 100s (have lots of inference)
/**
 * takes the first 100 items and a ...Rest element and turns it into[ConcattedItems,Rest]
 */
//prettier-ignore
type Concat100<T extends readonly RA[]>=T extends readonly[infer I1 extends RA,infer I2 extends RA,infer I3 extends RA,infer I4 extends RA,infer I5 extends RA,infer I6 extends RA,infer I7 extends RA,infer I8 extends RA,infer I9 extends RA,infer I10 extends RA,infer I11 extends RA,infer I12 extends RA,infer I13 extends RA,infer I14 extends RA,infer I15 extends RA,infer I16 extends RA,infer I17 extends RA,infer I18 extends RA,infer I19 extends RA,infer I20 extends RA,infer I21 extends RA,infer I22 extends RA,infer I23 extends RA,infer I24 extends RA,infer I25 extends RA,infer I26 extends RA,infer I27 extends RA,infer I28 extends RA,infer I29 extends RA,infer I30 extends RA,infer I31 extends RA,infer I32 extends RA,infer I33 extends RA,infer I34 extends RA,infer I35 extends RA,infer I36 extends RA,infer I37 extends RA,infer I38 extends RA,infer I39 extends RA,infer I40 extends RA,infer I41 extends RA,infer I42 extends RA,infer I43 extends RA,infer I44 extends RA,infer I45 extends RA,infer I46 extends RA,infer I47 extends RA,infer I48 extends RA,infer I49 extends RA,infer I50 extends RA,infer I51 extends RA,infer I52 extends RA,infer I53 extends RA,infer I54 extends RA,infer I55 extends RA,infer I56 extends RA,infer I57 extends RA,infer I58 extends RA,infer I59 extends RA,infer I60 extends RA,infer I61 extends RA,infer I62 extends RA,infer I63 extends RA,infer I64 extends RA,infer I65 extends RA,infer I66 extends RA,infer I67 extends RA,infer I68 extends RA,infer I69 extends RA,infer I70 extends RA,infer I71 extends RA,infer I72 extends RA,infer I73 extends RA,infer I74 extends RA,infer I75 extends RA,infer I76 extends RA,infer I77 extends RA,infer I78 extends RA,infer I79 extends RA,infer I80 extends RA,infer I81 extends RA,infer I82 extends RA,infer I83 extends RA,infer I84 extends RA,infer I85 extends RA,infer I86 extends RA,infer I87 extends RA,infer I88 extends RA,infer I89 extends RA,infer I90 extends RA,infer I91 extends RA,infer I92 extends RA,infer I93 extends RA,infer I94 extends RA,infer I95 extends RA,infer I96 extends RA,infer I97 extends RA,infer I98 extends RA,infer I99 extends RA,infer I100 extends RA,...infer Rest extends RA[]]?[[...I1,...I2,...I3,...I4,...I5,...I6,...I7,...I8,...I9,...I10,...I11,...I12,...I13,...I14,...I15,...I16,...I17,...I18,...I19,...I20,...I21,...I22,...I23,...I24,...I25,...I26,...I27,...I28,...I29,...I30,...I31,...I32,...I33,...I34,...I35,...I36,...I37,...I38,...I39,...I40,...I41,...I42,...I43,...I44,...I45,...I46,...I47,...I48,...I49,...I50,...I51,...I52,...I53,...I54,...I55,...I56,...I57,...I58,...I59,...I60,...I61,...I62,...I63,...I64,...I65,...I66,...I67,...I68,...I69,...I70,...I71,...I72,...I73,...I74,...I75,...I76,...I77,...I78,...I79,...I80,...I81,...I82,...I83,...I84,...I85,...I86,...I87,...I88,...I89,...I90,...I91,...I92,...I93,...I94,...I95,...I96,...I97,...I98,...I99,...I100],Rest]:[[],T];
//#endregion
//#region 10s (have lots of inference)
/**
 * takes the first 10 items and a ...Rest element and turns it into[ConcattedItems,Rest]
 */
//prettier-ignore
type Concat10<T extends readonly RA[]>=T extends readonly[infer I1 extends RA,infer I2 extends RA,infer I3 extends RA,infer I4 extends RA,infer I5 extends RA,infer I6 extends RA,infer I7 extends RA,infer I8 extends RA,infer I9 extends RA,infer I10 extends RA,...infer Rest extends RA[]]?[[...I1,...I2,...I3,...I4,...I5,...I6,...I7,...I8,...I9,...I10],Rest]:[[],T];
//#endregion
//#region final concat (a lookup)
/**
 * this is just a manual lookup at the end
 */
//prettier-ignore
type FinalConcat<T extends readonly RA[]>=T extends readonly[infer I1 extends RA,infer I2 extends RA,infer I3 extends RA,infer I4 extends RA,infer I5 extends RA,infer I6 extends RA,infer I7 extends RA,infer I8 extends RA,infer I9 extends RA]?[...I1,...I2,...I3,...I4,...I5,...I6,...I7,...I8,...I9]:T extends readonly[infer I1 extends RA,infer I2 extends RA,infer I3 extends RA,infer I4 extends RA,infer I5 extends RA,infer I6 extends RA,infer I7 extends RA,infer I8 extends RA]?[...I1,...I2,...I3,...I4,...I5,...I6,...I7,...I8]:T extends readonly[infer I1 extends RA,infer I2 extends RA,infer I3 extends RA,infer I4 extends RA,infer I5 extends RA,infer I6 extends RA,infer I7 extends RA]?[...I1,...I2,...I3,...I4,...I5,...I6,...I7]:T extends readonly[infer I1 extends RA,infer I2 extends RA,infer I3 extends RA,infer I4 extends RA,infer I5 extends RA,infer I6 extends RA]?[...I1,...I2,...I3,...I4,...I5,...I6]:T extends readonly[infer I1 extends RA,infer I2 extends RA,infer I3 extends RA,infer I4 extends RA,infer I5 extends RA]?[...I1,...I2,...I3,...I4,...I5]:T extends readonly[infer I1 extends RA,infer I2 extends RA,infer I3 extends RA,infer I4 extends RA]?[...I1,...I2,...I3,...I4]:T extends readonly[infer I1 extends RA,infer I2 extends RA,infer I3 extends RA]?[...I1,...I2,...I3]:T extends readonly[infer I1 extends RA,infer I2 extends RA]?[...I1,...I2]:T extends readonly[infer I1 extends RA]?[...I1]:[];
//#endregion
//#region passes (unrolled)
/**
 * these are the passes,these are designed to carry over the empty types so that these can be chained
 */
type ConcatPass1000<T extends [RA, readonly RA[]]> = Concat1000<T[1]> extends [
  infer Concatted extends RA,
  infer Rest extends readonly RA[]
]
  ? [[...T[0], ...Concatted], Rest]
  : never;
type ConcatTake1000s<T extends RA> = ConcatPass1000<
  ConcatPass1000<
    ConcatPass1000<
      ConcatPass1000<
        ConcatPass1000<
          ConcatPass1000<ConcatPass1000<ConcatPass1000<Concat1000<T>>>>
        >
      >
    >
  >
>;
type ConcatPass100<T extends [RA, readonly RA[]]> = Concat100<T[1]> extends [
  infer Concatted extends RA,
  infer Rest extends readonly RA[]
]
  ? [[...T[0], ...Concatted], Rest]
  : never;
type ConcatTake100s<T extends RA> = ConcatPass100<
  ConcatPass100<
    ConcatPass100<
      ConcatPass100<
        ConcatPass100<ConcatPass100<ConcatPass100<ConcatPass100<Concat100<T>>>>>
      >
    >
  >
>;
type ConcatPass10<T extends [RA, readonly RA[]]> = Concat10<T[1]> extends [
  infer Concatted extends RA,
  infer Rest extends readonly RA[]
]
  ? [[...T[0], ...Concatted], Rest]
  : never;
type ConcatTake10s<T extends RA> = ConcatPass10<
  ConcatPass10<
    ConcatPass10<
      ConcatPass10<
        ConcatPass10<ConcatPass10<ConcatPass10<ConcatPass10<Concat100<T>>>>>
      >
    >
  >
>;
//#endregion
/**
 * this takes the three passes and combines them
 */
export type Concat<T extends RA> = ConcatTake1000s<T> extends [
  infer Concatted1 extends RA,
  infer Rest1 extends readonly RA[]
]
  ? ConcatTake100s<Rest1> extends [
      infer Concatted2 extends RA,
      infer Rest2 extends readonly RA[]
    ]
    ? ConcatTake10s<Rest2> extends [
        infer Concatted3 extends RA,
        infer Rest3 extends readonly RA[]
      ]
      ? [...Concatted1, ...Concatted2, ...Concatted3, ...FinalConcat<Rest3>]
      : never
    : never
  : never;
//#endregion
//#region Peel (for the same reasons as concat)
//#region Peel Left
//#region 1000s
//prettier-ignore
type PeelLeft1000<T extends RA>=T extends[infer I1,infer I2,infer I3,infer I4,infer I5,infer I6,infer I7,infer I8,infer I9,infer I10,infer I11,infer I12,infer I13,infer I14,infer I15,infer I16,infer I17,infer I18,infer I19,infer I20,infer I21,infer I22,infer I23,infer I24,infer I25,infer I26,infer I27,infer I28,infer I29,infer I30,infer I31,infer I32,infer I33,infer I34,infer I35,infer I36,infer I37,infer I38,infer I39,infer I40,infer I41,infer I42,infer I43,infer I44,infer I45,infer I46,infer I47,infer I48,infer I49,infer I50,infer I51,infer I52,infer I53,infer I54,infer I55,infer I56,infer I57,infer I58,infer I59,infer I60,infer I61,infer I62,infer I63,infer I64,infer I65,infer I66,infer I67,infer I68,infer I69,infer I70,infer I71,infer I72,infer I73,infer I74,infer I75,infer I76,infer I77,infer I78,infer I79,infer I80,infer I81,infer I82,infer I83,infer I84,infer I85,infer I86,infer I87,infer I88,infer I89,infer I90,infer I91,infer I92,infer I93,infer I94,infer I95,infer I96,infer I97,infer I98,infer I99,infer I100,infer I101,infer I102,infer I103,infer I104,infer I105,infer I106,infer I107,infer I108,infer I109,infer I110,infer I111,infer I112,infer I113,infer I114,infer I115,infer I116,infer I117,infer I118,infer I119,infer I120,infer I121,infer I122,infer I123,infer I124,infer I125,infer I126,infer I127,infer I128,infer I129,infer I130,infer I131,infer I132,infer I133,infer I134,infer I135,infer I136,infer I137,infer I138,infer I139,infer I140,infer I141,infer I142,infer I143,infer I144,infer I145,infer I146,infer I147,infer I148,infer I149,infer I150,infer I151,infer I152,infer I153,infer I154,infer I155,infer I156,infer I157,infer I158,infer I159,infer I160,infer I161,infer I162,infer I163,infer I164,infer I165,infer I166,infer I167,infer I168,infer I169,infer I170,infer I171,infer I172,infer I173,infer I174,infer I175,infer I176,infer I177,infer I178,infer I179,infer I180,infer I181,infer I182,infer I183,infer I184,infer I185,infer I186,infer I187,infer I188,infer I189,infer I190,infer I191,infer I192,infer I193,infer I194,infer I195,infer I196,infer I197,infer I198,infer I199,infer I200,infer I201,infer I202,infer I203,infer I204,infer I205,infer I206,infer I207,infer I208,infer I209,infer I210,infer I211,infer I212,infer I213,infer I214,infer I215,infer I216,infer I217,infer I218,infer I219,infer I220,infer I221,infer I222,infer I223,infer I224,infer I225,infer I226,infer I227,infer I228,infer I229,infer I230,infer I231,infer I232,infer I233,infer I234,infer I235,infer I236,infer I237,infer I238,infer I239,infer I240,infer I241,infer I242,infer I243,infer I244,infer I245,infer I246,infer I247,infer I248,infer I249,infer I250,infer I251,infer I252,infer I253,infer I254,infer I255,infer I256,infer I257,infer I258,infer I259,infer I260,infer I261,infer I262,infer I263,infer I264,infer I265,infer I266,infer I267,infer I268,infer I269,infer I270,infer I271,infer I272,infer I273,infer I274,infer I275,infer I276,infer I277,infer I278,infer I279,infer I280,infer I281,infer I282,infer I283,infer I284,infer I285,infer I286,infer I287,infer I288,infer I289,infer I290,infer I291,infer I292,infer I293,infer I294,infer I295,infer I296,infer I297,infer I298,infer I299,infer I300,infer I301,infer I302,infer I303,infer I304,infer I305,infer I306,infer I307,infer I308,infer I309,infer I310,infer I311,infer I312,infer I313,infer I314,infer I315,infer I316,infer I317,infer I318,infer I319,infer I320,infer I321,infer I322,infer I323,infer I324,infer I325,infer I326,infer I327,infer I328,infer I329,infer I330,infer I331,infer I332,infer I333,infer I334,infer I335,infer I336,infer I337,infer I338,infer I339,infer I340,infer I341,infer I342,infer I343,infer I344,infer I345,infer I346,infer I347,infer I348,infer I349,infer I350,infer I351,infer I352,infer I353,infer I354,infer I355,infer I356,infer I357,infer I358,infer I359,infer I360,infer I361,infer I362,infer I363,infer I364,infer I365,infer I366,infer I367,infer I368,infer I369,infer I370,infer I371,infer I372,infer I373,infer I374,infer I375,infer I376,infer I377,infer I378,infer I379,infer I380,infer I381,infer I382,infer I383,infer I384,infer I385,infer I386,infer I387,infer I388,infer I389,infer I390,infer I391,infer I392,infer I393,infer I394,infer I395,infer I396,infer I397,infer I398,infer I399,infer I400,infer I401,infer I402,infer I403,infer I404,infer I405,infer I406,infer I407,infer I408,infer I409,infer I410,infer I411,infer I412,infer I413,infer I414,infer I415,infer I416,infer I417,infer I418,infer I419,infer I420,infer I421,infer I422,infer I423,infer I424,infer I425,infer I426,infer I427,infer I428,infer I429,infer I430,infer I431,infer I432,infer I433,infer I434,infer I435,infer I436,infer I437,infer I438,infer I439,infer I440,infer I441,infer I442,infer I443,infer I444,infer I445,infer I446,infer I447,infer I448,infer I449,infer I450,infer I451,infer I452,infer I453,infer I454,infer I455,infer I456,infer I457,infer I458,infer I459,infer I460,infer I461,infer I462,infer I463,infer I464,infer I465,infer I466,infer I467,infer I468,infer I469,infer I470,infer I471,infer I472,infer I473,infer I474,infer I475,infer I476,infer I477,infer I478,infer I479,infer I480,infer I481,infer I482,infer I483,infer I484,infer I485,infer I486,infer I487,infer I488,infer I489,infer I490,infer I491,infer I492,infer I493,infer I494,infer I495,infer I496,infer I497,infer I498,infer I499,infer I500,infer I501,infer I502,infer I503,infer I504,infer I505,infer I506,infer I507,infer I508,infer I509,infer I510,infer I511,infer I512,infer I513,infer I514,infer I515,infer I516,infer I517,infer I518,infer I519,infer I520,infer I521,infer I522,infer I523,infer I524,infer I525,infer I526,infer I527,infer I528,infer I529,infer I530,infer I531,infer I532,infer I533,infer I534,infer I535,infer I536,infer I537,infer I538,infer I539,infer I540,infer I541,infer I542,infer I543,infer I544,infer I545,infer I546,infer I547,infer I548,infer I549,infer I550,infer I551,infer I552,infer I553,infer I554,infer I555,infer I556,infer I557,infer I558,infer I559,infer I560,infer I561,infer I562,infer I563,infer I564,infer I565,infer I566,infer I567,infer I568,infer I569,infer I570,infer I571,infer I572,infer I573,infer I574,infer I575,infer I576,infer I577,infer I578,infer I579,infer I580,infer I581,infer I582,infer I583,infer I584,infer I585,infer I586,infer I587,infer I588,infer I589,infer I590,infer I591,infer I592,infer I593,infer I594,infer I595,infer I596,infer I597,infer I598,infer I599,infer I600,infer I601,infer I602,infer I603,infer I604,infer I605,infer I606,infer I607,infer I608,infer I609,infer I610,infer I611,infer I612,infer I613,infer I614,infer I615,infer I616,infer I617,infer I618,infer I619,infer I620,infer I621,infer I622,infer I623,infer I624,infer I625,infer I626,infer I627,infer I628,infer I629,infer I630,infer I631,infer I632,infer I633,infer I634,infer I635,infer I636,infer I637,infer I638,infer I639,infer I640,infer I641,infer I642,infer I643,infer I644,infer I645,infer I646,infer I647,infer I648,infer I649,infer I650,infer I651,infer I652,infer I653,infer I654,infer I655,infer I656,infer I657,infer I658,infer I659,infer I660,infer I661,infer I662,infer I663,infer I664,infer I665,infer I666,infer I667,infer I668,infer I669,infer I670,infer I671,infer I672,infer I673,infer I674,infer I675,infer I676,infer I677,infer I678,infer I679,infer I680,infer I681,infer I682,infer I683,infer I684,infer I685,infer I686,infer I687,infer I688,infer I689,infer I690,infer I691,infer I692,infer I693,infer I694,infer I695,infer I696,infer I697,infer I698,infer I699,infer I700,infer I701,infer I702,infer I703,infer I704,infer I705,infer I706,infer I707,infer I708,infer I709,infer I710,infer I711,infer I712,infer I713,infer I714,infer I715,infer I716,infer I717,infer I718,infer I719,infer I720,infer I721,infer I722,infer I723,infer I724,infer I725,infer I726,infer I727,infer I728,infer I729,infer I730,infer I731,infer I732,infer I733,infer I734,infer I735,infer I736,infer I737,infer I738,infer I739,infer I740,infer I741,infer I742,infer I743,infer I744,infer I745,infer I746,infer I747,infer I748,infer I749,infer I750,infer I751,infer I752,infer I753,infer I754,infer I755,infer I756,infer I757,infer I758,infer I759,infer I760,infer I761,infer I762,infer I763,infer I764,infer I765,infer I766,infer I767,infer I768,infer I769,infer I770,infer I771,infer I772,infer I773,infer I774,infer I775,infer I776,infer I777,infer I778,infer I779,infer I780,infer I781,infer I782,infer I783,infer I784,infer I785,infer I786,infer I787,infer I788,infer I789,infer I790,infer I791,infer I792,infer I793,infer I794,infer I795,infer I796,infer I797,infer I798,infer I799,infer I800,infer I801,infer I802,infer I803,infer I804,infer I805,infer I806,infer I807,infer I808,infer I809,infer I810,infer I811,infer I812,infer I813,infer I814,infer I815,infer I816,infer I817,infer I818,infer I819,infer I820,infer I821,infer I822,infer I823,infer I824,infer I825,infer I826,infer I827,infer I828,infer I829,infer I830,infer I831,infer I832,infer I833,infer I834,infer I835,infer I836,infer I837,infer I838,infer I839,infer I840,infer I841,infer I842,infer I843,infer I844,infer I845,infer I846,infer I847,infer I848,infer I849,infer I850,infer I851,infer I852,infer I853,infer I854,infer I855,infer I856,infer I857,infer I858,infer I859,infer I860,infer I861,infer I862,infer I863,infer I864,infer I865,infer I866,infer I867,infer I868,infer I869,infer I870,infer I871,infer I872,infer I873,infer I874,infer I875,infer I876,infer I877,infer I878,infer I879,infer I880,infer I881,infer I882,infer I883,infer I884,infer I885,infer I886,infer I887,infer I888,infer I889,infer I890,infer I891,infer I892,infer I893,infer I894,infer I895,infer I896,infer I897,infer I898,infer I899,infer I900,infer I901,infer I902,infer I903,infer I904,infer I905,infer I906,infer I907,infer I908,infer I909,infer I910,infer I911,infer I912,infer I913,infer I914,infer I915,infer I916,infer I917,infer I918,infer I919,infer I920,infer I921,infer I922,infer I923,infer I924,infer I925,infer I926,infer I927,infer I928,infer I929,infer I930,infer I931,infer I932,infer I933,infer I934,infer I935,infer I936,infer I937,infer I938,infer I939,infer I940,infer I941,infer I942,infer I943,infer I944,infer I945,infer I946,infer I947,infer I948,infer I949,infer I950,infer I951,infer I952,infer I953,infer I954,infer I955,infer I956,infer I957,infer I958,infer I959,infer I960,infer I961,infer I962,infer I963,infer I964,infer I965,infer I966,infer I967,infer I968,infer I969,infer I970,infer I971,infer I972,infer I973,infer I974,infer I975,infer I976,infer I977,infer I978,infer I979,infer I980,infer I981,infer I982,infer I983,infer I984,infer I985,infer I986,infer I987,infer I988,infer I989,infer I990,infer I991,infer I992,infer I993,infer I994,infer I995,infer I996,infer I997,infer I998,infer I999,infer I1000,...infer Rest]?[[[I1],[I2],[I3],[I4],[I5],[I6],[I7],[I8],[I9],[I10],[I11],[I12],[I13],[I14],[I15],[I16],[I17],[I18],[I19],[I20],[I21],[I22],[I23],[I24],[I25],[I26],[I27],[I28],[I29],[I30],[I31],[I32],[I33],[I34],[I35],[I36],[I37],[I38],[I39],[I40],[I41],[I42],[I43],[I44],[I45],[I46],[I47],[I48],[I49],[I50],[I51],[I52],[I53],[I54],[I55],[I56],[I57],[I58],[I59],[I60],[I61],[I62],[I63],[I64],[I65],[I66],[I67],[I68],[I69],[I70],[I71],[I72],[I73],[I74],[I75],[I76],[I77],[I78],[I79],[I80],[I81],[I82],[I83],[I84],[I85],[I86],[I87],[I88],[I89],[I90],[I91],[I92],[I93],[I94],[I95],[I96],[I97],[I98],[I99],[I100],[I101],[I102],[I103],[I104],[I105],[I106],[I107],[I108],[I109],[I110],[I111],[I112],[I113],[I114],[I115],[I116],[I117],[I118],[I119],[I120],[I121],[I122],[I123],[I124],[I125],[I126],[I127],[I128],[I129],[I130],[I131],[I132],[I133],[I134],[I135],[I136],[I137],[I138],[I139],[I140],[I141],[I142],[I143],[I144],[I145],[I146],[I147],[I148],[I149],[I150],[I151],[I152],[I153],[I154],[I155],[I156],[I157],[I158],[I159],[I160],[I161],[I162],[I163],[I164],[I165],[I166],[I167],[I168],[I169],[I170],[I171],[I172],[I173],[I174],[I175],[I176],[I177],[I178],[I179],[I180],[I181],[I182],[I183],[I184],[I185],[I186],[I187],[I188],[I189],[I190],[I191],[I192],[I193],[I194],[I195],[I196],[I197],[I198],[I199],[I200],[I201],[I202],[I203],[I204],[I205],[I206],[I207],[I208],[I209],[I210],[I211],[I212],[I213],[I214],[I215],[I216],[I217],[I218],[I219],[I220],[I221],[I222],[I223],[I224],[I225],[I226],[I227],[I228],[I229],[I230],[I231],[I232],[I233],[I234],[I235],[I236],[I237],[I238],[I239],[I240],[I241],[I242],[I243],[I244],[I245],[I246],[I247],[I248],[I249],[I250],[I251],[I252],[I253],[I254],[I255],[I256],[I257],[I258],[I259],[I260],[I261],[I262],[I263],[I264],[I265],[I266],[I267],[I268],[I269],[I270],[I271],[I272],[I273],[I274],[I275],[I276],[I277],[I278],[I279],[I280],[I281],[I282],[I283],[I284],[I285],[I286],[I287],[I288],[I289],[I290],[I291],[I292],[I293],[I294],[I295],[I296],[I297],[I298],[I299],[I300],[I301],[I302],[I303],[I304],[I305],[I306],[I307],[I308],[I309],[I310],[I311],[I312],[I313],[I314],[I315],[I316],[I317],[I318],[I319],[I320],[I321],[I322],[I323],[I324],[I325],[I326],[I327],[I328],[I329],[I330],[I331],[I332],[I333],[I334],[I335],[I336],[I337],[I338],[I339],[I340],[I341],[I342],[I343],[I344],[I345],[I346],[I347],[I348],[I349],[I350],[I351],[I352],[I353],[I354],[I355],[I356],[I357],[I358],[I359],[I360],[I361],[I362],[I363],[I364],[I365],[I366],[I367],[I368],[I369],[I370],[I371],[I372],[I373],[I374],[I375],[I376],[I377],[I378],[I379],[I380],[I381],[I382],[I383],[I384],[I385],[I386],[I387],[I388],[I389],[I390],[I391],[I392],[I393],[I394],[I395],[I396],[I397],[I398],[I399],[I400],[I401],[I402],[I403],[I404],[I405],[I406],[I407],[I408],[I409],[I410],[I411],[I412],[I413],[I414],[I415],[I416],[I417],[I418],[I419],[I420],[I421],[I422],[I423],[I424],[I425],[I426],[I427],[I428],[I429],[I430],[I431],[I432],[I433],[I434],[I435],[I436],[I437],[I438],[I439],[I440],[I441],[I442],[I443],[I444],[I445],[I446],[I447],[I448],[I449],[I450],[I451],[I452],[I453],[I454],[I455],[I456],[I457],[I458],[I459],[I460],[I461],[I462],[I463],[I464],[I465],[I466],[I467],[I468],[I469],[I470],[I471],[I472],[I473],[I474],[I475],[I476],[I477],[I478],[I479],[I480],[I481],[I482],[I483],[I484],[I485],[I486],[I487],[I488],[I489],[I490],[I491],[I492],[I493],[I494],[I495],[I496],[I497],[I498],[I499],[I500],[I501],[I502],[I503],[I504],[I505],[I506],[I507],[I508],[I509],[I510],[I511],[I512],[I513],[I514],[I515],[I516],[I517],[I518],[I519],[I520],[I521],[I522],[I523],[I524],[I525],[I526],[I527],[I528],[I529],[I530],[I531],[I532],[I533],[I534],[I535],[I536],[I537],[I538],[I539],[I540],[I541],[I542],[I543],[I544],[I545],[I546],[I547],[I548],[I549],[I550],[I551],[I552],[I553],[I554],[I555],[I556],[I557],[I558],[I559],[I560],[I561],[I562],[I563],[I564],[I565],[I566],[I567],[I568],[I569],[I570],[I571],[I572],[I573],[I574],[I575],[I576],[I577],[I578],[I579],[I580],[I581],[I582],[I583],[I584],[I585],[I586],[I587],[I588],[I589],[I590],[I591],[I592],[I593],[I594],[I595],[I596],[I597],[I598],[I599],[I600],[I601],[I602],[I603],[I604],[I605],[I606],[I607],[I608],[I609],[I610],[I611],[I612],[I613],[I614],[I615],[I616],[I617],[I618],[I619],[I620],[I621],[I622],[I623],[I624],[I625],[I626],[I627],[I628],[I629],[I630],[I631],[I632],[I633],[I634],[I635],[I636],[I637],[I638],[I639],[I640],[I641],[I642],[I643],[I644],[I645],[I646],[I647],[I648],[I649],[I650],[I651],[I652],[I653],[I654],[I655],[I656],[I657],[I658],[I659],[I660],[I661],[I662],[I663],[I664],[I665],[I666],[I667],[I668],[I669],[I670],[I671],[I672],[I673],[I674],[I675],[I676],[I677],[I678],[I679],[I680],[I681],[I682],[I683],[I684],[I685],[I686],[I687],[I688],[I689],[I690],[I691],[I692],[I693],[I694],[I695],[I696],[I697],[I698],[I699],[I700],[I701],[I702],[I703],[I704],[I705],[I706],[I707],[I708],[I709],[I710],[I711],[I712],[I713],[I714],[I715],[I716],[I717],[I718],[I719],[I720],[I721],[I722],[I723],[I724],[I725],[I726],[I727],[I728],[I729],[I730],[I731],[I732],[I733],[I734],[I735],[I736],[I737],[I738],[I739],[I740],[I741],[I742],[I743],[I744],[I745],[I746],[I747],[I748],[I749],[I750],[I751],[I752],[I753],[I754],[I755],[I756],[I757],[I758],[I759],[I760],[I761],[I762],[I763],[I764],[I765],[I766],[I767],[I768],[I769],[I770],[I771],[I772],[I773],[I774],[I775],[I776],[I777],[I778],[I779],[I780],[I781],[I782],[I783],[I784],[I785],[I786],[I787],[I788],[I789],[I790],[I791],[I792],[I793],[I794],[I795],[I796],[I797],[I798],[I799],[I800],[I801],[I802],[I803],[I804],[I805],[I806],[I807],[I808],[I809],[I810],[I811],[I812],[I813],[I814],[I815],[I816],[I817],[I818],[I819],[I820],[I821],[I822],[I823],[I824],[I825],[I826],[I827],[I828],[I829],[I830],[I831],[I832],[I833],[I834],[I835],[I836],[I837],[I838],[I839],[I840],[I841],[I842],[I843],[I844],[I845],[I846],[I847],[I848],[I849],[I850],[I851],[I852],[I853],[I854],[I855],[I856],[I857],[I858],[I859],[I860],[I861],[I862],[I863],[I864],[I865],[I866],[I867],[I868],[I869],[I870],[I871],[I872],[I873],[I874],[I875],[I876],[I877],[I878],[I879],[I880],[I881],[I882],[I883],[I884],[I885],[I886],[I887],[I888],[I889],[I890],[I891],[I892],[I893],[I894],[I895],[I896],[I897],[I898],[I899],[I900],[I901],[I902],[I903],[I904],[I905],[I906],[I907],[I908],[I909],[I910],[I911],[I912],[I913],[I914],[I915],[I916],[I917],[I918],[I919],[I920],[I921],[I922],[I923],[I924],[I925],[I926],[I927],[I928],[I929],[I930],[I931],[I932],[I933],[I934],[I935],[I936],[I937],[I938],[I939],[I940],[I941],[I942],[I943],[I944],[I945],[I946],[I947],[I948],[I949],[I950],[I951],[I952],[I953],[I954],[I955],[I956],[I957],[I958],[I959],[I960],[I961],[I962],[I963],[I964],[I965],[I966],[I967],[I968],[I969],[I970],[I971],[I972],[I973],[I974],[I975],[I976],[I977],[I978],[I979],[I980],[I981],[I982],[I983],[I984],[I985],[I986],[I987],[I988],[I989],[I990],[I991],[I992],[I993],[I994],[I995],[I996],[I997],[I998],[I999],[I1000]],Rest]:[[],T]; //#endregion
//#endregion
//#region 100s
//prettier-ignore
type PeelLeft100<T extends RA>=T extends[infer I1,infer I2,infer I3,infer I4,infer I5,infer I6,infer I7,infer I8,infer I9,infer I10,infer I11,infer I12,infer I13,infer I14,infer I15,infer I16,infer I17,infer I18,infer I19,infer I20,infer I21,infer I22,infer I23,infer I24,infer I25,infer I26,infer I27,infer I28,infer I29,infer I30,infer I31,infer I32,infer I33,infer I34,infer I35,infer I36,infer I37,infer I38,infer I39,infer I40,infer I41,infer I42,infer I43,infer I44,infer I45,infer I46,infer I47,infer I48,infer I49,infer I50,infer I51,infer I52,infer I53,infer I54,infer I55,infer I56,infer I57,infer I58,infer I59,infer I60,infer I61,infer I62,infer I63,infer I64,infer I65,infer I66,infer I67,infer I68,infer I69,infer I70,infer I71,infer I72,infer I73,infer I74,infer I75,infer I76,infer I77,infer I78,infer I79,infer I80,infer I81,infer I82,infer I83,infer I84,infer I85,infer I86,infer I87,infer I88,infer I89,infer I90,infer I91,infer I92,infer I93,infer I94,infer I95,infer I96,infer I97,infer I98,infer I99,infer I100,...infer Rest]?[[[I1],[I2],[I3],[I4],[I5],[I6],[I7],[I8],[I9],[I10],[I11],[I12],[I13],[I14],[I15],[I16],[I17],[I18],[I19],[I20],[I21],[I22],[I23],[I24],[I25],[I26],[I27],[I28],[I29],[I30],[I31],[I32],[I33],[I34],[I35],[I36],[I37],[I38],[I39],[I40],[I41],[I42],[I43],[I44],[I45],[I46],[I47],[I48],[I49],[I50],[I51],[I52],[I53],[I54],[I55],[I56],[I57],[I58],[I59],[I60],[I61],[I62],[I63],[I64],[I65],[I66],[I67],[I68],[I69],[I70],[I71],[I72],[I73],[I74],[I75],[I76],[I77],[I78],[I79],[I80],[I81],[I82],[I83],[I84],[I85],[I86],[I87],[I88],[I89],[I90],[I91],[I92],[I93],[I94],[I95],[I96],[I97],[I98],[I99],[I100]],Rest]:[[],T];
//#endregion
//#region 10s
//prettier-ignore
type PeelLeft10<T extends RA>=T extends[infer I1,infer I2,infer I3,infer I4,infer I5,infer I6,infer I7,infer I8,infer I9,infer I10,...infer Rest]?[[[I1],[I2],[I3],[I4],[I5],[I6],[I7],[I8],[I9],[I10]],Rest]:[[],T];
//#endregion
//#region final peel
//prettier-ignore
type FinalPeelLeft<T extends RA>=T extends[infer I9,infer I8,infer I7,infer I6,infer I5,infer I4,infer I3,infer I2,infer I1,...infer Rest]?[[[I9],[I8],[I7],[I6],[I5],[I4],[I3],[I2],[I1]],Rest]:T extends[infer I8,infer I7,infer I6,infer I5,infer I4,infer I3,infer I2,infer I1,...infer Rest]?[[[I8],[I7],[I6],[I5],[I4],[I3],[I2],[I1]],Rest]:T extends[infer I7,infer I6,infer I5,infer I4,infer I3,infer I2,infer I1,...infer Rest]?[[[I7],[I6],[I5],[I4],[I3],[I2],[I1]],Rest]:T extends[infer I6,infer I5,infer I4,infer I3,infer I2,infer I1,...infer Rest]?[[[I6],[I5],[I4],[I3],[I2],[I1]],Rest]:T extends[infer I5,infer I4,infer I3,infer I2,infer I1,...infer Rest]?[[[I5],[I4],[I3],[I2],[I1]],Rest]:T extends[infer I4,infer I3,infer I2,infer I1,...infer Rest]?[[[I4],[I3],[I2],[I1]],Rest]:T extends[infer I3,infer I2,infer I1,...infer Rest]?[[[I3],[I2],[I1]],Rest]:T extends[infer I2,infer I1,...infer Rest]?[[[I2],[I1]],Rest]:T extends[infer I1,...infer Rest]?[[[I1]],Rest]:[[],T];
//#endregion
//#region passes
type PeelLeftPass1000<T extends [RA, RA]> = T extends [
  infer Items extends RA,
  infer Rest extends RA
]
  ? PeelLeft1000<Rest> extends [
      infer NewItems extends RA,
      infer NewRest extends RA
    ]
    ? [[...Items, ...NewItems], NewRest]
    : never
  : never;
type PeelLeftTake1000s<T extends RA> = PeelLeftPass1000<
  PeelLeftPass1000<
    PeelLeftPass1000<
      PeelLeftPass1000<
        PeelLeftPass1000<
          PeelLeftPass1000<
            PeelLeftPass1000<
              PeelLeftPass1000<PeelLeftPass1000<PeelLeft1000<T>>>
            >
          >
        >
      >
    >
  >
>;
type PeelLeftPass100<T extends [RA, RA]> = T extends [
  infer Items extends RA,
  infer Rest extends RA
]
  ? PeelLeft100<Rest> extends [
      infer NewItems extends RA,
      infer NewRest extends RA
    ]
    ? [[...Items, ...NewItems], NewRest]
    : never
  : never;
type PeelLeftTake100s<T extends RA> = PeelLeftPass100<
  PeelLeftPass100<
    PeelLeftPass100<
      PeelLeftPass100<
        PeelLeftPass100<
          PeelLeftPass100<
            PeelLeftPass100<PeelLeftPass100<PeelLeftPass100<PeelLeft100<T>>>>
          >
        >
      >
    >
  >
>;
type PeelLeftPass10<T extends [RA, RA]> = T extends [
  infer Items extends RA,
  infer Rest extends RA
]
  ? PeelLeft10<Rest> extends [
      infer NewItems extends RA,
      infer NewRest extends RA
    ]
    ? [[...Items, ...NewItems], NewRest]
    : never
  : never;
type PeelLeftTake10s<T extends RA> = PeelLeftPass10<
  PeelLeftPass10<
    PeelLeftPass10<
      PeelLeftPass10<
        PeelLeftPass10<
          PeelLeftPass10<
            PeelLeftPass10<PeelLeftPass10<PeelLeftPass10<PeelLeft10<T>>>>
          >
        >
      >
    >
  >
>;
type PeelLeft<T extends RA> = IsArrayStrict<T> extends true
  ? [T]
  : PeelLeftTake1000s<T> extends [infer I1 extends RA, infer R1 extends RA]
  ? PeelLeftTake100s<R1> extends [infer I2 extends RA, infer R2 extends RA]
    ? PeelLeftTake10s<R2> extends [infer I3 extends RA, infer R3 extends RA]
      ? FinalPeelLeft<R3> extends [infer I4 extends RA, infer R4 extends RA]
        ? [...I1, ...I2, ...I3, ...I4, [R4]]
        : never
      : never
    : never
  : never;
//#endregion
//#endregion
//#region Peel Right
//#region 1000s
//prettier-ignore
type PeelRight1000<T extends RA>=T extends[...infer Rest,infer I1,infer I2,infer I3,infer I4,infer I5,infer I6,infer I7,infer I8,infer I9,infer I10,infer I11,infer I12,infer I13,infer I14,infer I15,infer I16,infer I17,infer I18,infer I19,infer I20,infer I21,infer I22,infer I23,infer I24,infer I25,infer I26,infer I27,infer I28,infer I29,infer I30,infer I31,infer I32,infer I33,infer I34,infer I35,infer I36,infer I37,infer I38,infer I39,infer I40,infer I41,infer I42,infer I43,infer I44,infer I45,infer I46,infer I47,infer I48,infer I49,infer I50,infer I51,infer I52,infer I53,infer I54,infer I55,infer I56,infer I57,infer I58,infer I59,infer I60,infer I61,infer I62,infer I63,infer I64,infer I65,infer I66,infer I67,infer I68,infer I69,infer I70,infer I71,infer I72,infer I73,infer I74,infer I75,infer I76,infer I77,infer I78,infer I79,infer I80,infer I81,infer I82,infer I83,infer I84,infer I85,infer I86,infer I87,infer I88,infer I89,infer I90,infer I91,infer I92,infer I93,infer I94,infer I95,infer I96,infer I97,infer I98,infer I99,infer I100,infer I101,infer I102,infer I103,infer I104,infer I105,infer I106,infer I107,infer I108,infer I109,infer I110,infer I111,infer I112,infer I113,infer I114,infer I115,infer I116,infer I117,infer I118,infer I119,infer I120,infer I121,infer I122,infer I123,infer I124,infer I125,infer I126,infer I127,infer I128,infer I129,infer I130,infer I131,infer I132,infer I133,infer I134,infer I135,infer I136,infer I137,infer I138,infer I139,infer I140,infer I141,infer I142,infer I143,infer I144,infer I145,infer I146,infer I147,infer I148,infer I149,infer I150,infer I151,infer I152,infer I153,infer I154,infer I155,infer I156,infer I157,infer I158,infer I159,infer I160,infer I161,infer I162,infer I163,infer I164,infer I165,infer I166,infer I167,infer I168,infer I169,infer I170,infer I171,infer I172,infer I173,infer I174,infer I175,infer I176,infer I177,infer I178,infer I179,infer I180,infer I181,infer I182,infer I183,infer I184,infer I185,infer I186,infer I187,infer I188,infer I189,infer I190,infer I191,infer I192,infer I193,infer I194,infer I195,infer I196,infer I197,infer I198,infer I199,infer I200,infer I201,infer I202,infer I203,infer I204,infer I205,infer I206,infer I207,infer I208,infer I209,infer I210,infer I211,infer I212,infer I213,infer I214,infer I215,infer I216,infer I217,infer I218,infer I219,infer I220,infer I221,infer I222,infer I223,infer I224,infer I225,infer I226,infer I227,infer I228,infer I229,infer I230,infer I231,infer I232,infer I233,infer I234,infer I235,infer I236,infer I237,infer I238,infer I239,infer I240,infer I241,infer I242,infer I243,infer I244,infer I245,infer I246,infer I247,infer I248,infer I249,infer I250,infer I251,infer I252,infer I253,infer I254,infer I255,infer I256,infer I257,infer I258,infer I259,infer I260,infer I261,infer I262,infer I263,infer I264,infer I265,infer I266,infer I267,infer I268,infer I269,infer I270,infer I271,infer I272,infer I273,infer I274,infer I275,infer I276,infer I277,infer I278,infer I279,infer I280,infer I281,infer I282,infer I283,infer I284,infer I285,infer I286,infer I287,infer I288,infer I289,infer I290,infer I291,infer I292,infer I293,infer I294,infer I295,infer I296,infer I297,infer I298,infer I299,infer I300,infer I301,infer I302,infer I303,infer I304,infer I305,infer I306,infer I307,infer I308,infer I309,infer I310,infer I311,infer I312,infer I313,infer I314,infer I315,infer I316,infer I317,infer I318,infer I319,infer I320,infer I321,infer I322,infer I323,infer I324,infer I325,infer I326,infer I327,infer I328,infer I329,infer I330,infer I331,infer I332,infer I333,infer I334,infer I335,infer I336,infer I337,infer I338,infer I339,infer I340,infer I341,infer I342,infer I343,infer I344,infer I345,infer I346,infer I347,infer I348,infer I349,infer I350,infer I351,infer I352,infer I353,infer I354,infer I355,infer I356,infer I357,infer I358,infer I359,infer I360,infer I361,infer I362,infer I363,infer I364,infer I365,infer I366,infer I367,infer I368,infer I369,infer I370,infer I371,infer I372,infer I373,infer I374,infer I375,infer I376,infer I377,infer I378,infer I379,infer I380,infer I381,infer I382,infer I383,infer I384,infer I385,infer I386,infer I387,infer I388,infer I389,infer I390,infer I391,infer I392,infer I393,infer I394,infer I395,infer I396,infer I397,infer I398,infer I399,infer I400,infer I401,infer I402,infer I403,infer I404,infer I405,infer I406,infer I407,infer I408,infer I409,infer I410,infer I411,infer I412,infer I413,infer I414,infer I415,infer I416,infer I417,infer I418,infer I419,infer I420,infer I421,infer I422,infer I423,infer I424,infer I425,infer I426,infer I427,infer I428,infer I429,infer I430,infer I431,infer I432,infer I433,infer I434,infer I435,infer I436,infer I437,infer I438,infer I439,infer I440,infer I441,infer I442,infer I443,infer I444,infer I445,infer I446,infer I447,infer I448,infer I449,infer I450,infer I451,infer I452,infer I453,infer I454,infer I455,infer I456,infer I457,infer I458,infer I459,infer I460,infer I461,infer I462,infer I463,infer I464,infer I465,infer I466,infer I467,infer I468,infer I469,infer I470,infer I471,infer I472,infer I473,infer I474,infer I475,infer I476,infer I477,infer I478,infer I479,infer I480,infer I481,infer I482,infer I483,infer I484,infer I485,infer I486,infer I487,infer I488,infer I489,infer I490,infer I491,infer I492,infer I493,infer I494,infer I495,infer I496,infer I497,infer I498,infer I499,infer I500,infer I501,infer I502,infer I503,infer I504,infer I505,infer I506,infer I507,infer I508,infer I509,infer I510,infer I511,infer I512,infer I513,infer I514,infer I515,infer I516,infer I517,infer I518,infer I519,infer I520,infer I521,infer I522,infer I523,infer I524,infer I525,infer I526,infer I527,infer I528,infer I529,infer I530,infer I531,infer I532,infer I533,infer I534,infer I535,infer I536,infer I537,infer I538,infer I539,infer I540,infer I541,infer I542,infer I543,infer I544,infer I545,infer I546,infer I547,infer I548,infer I549,infer I550,infer I551,infer I552,infer I553,infer I554,infer I555,infer I556,infer I557,infer I558,infer I559,infer I560,infer I561,infer I562,infer I563,infer I564,infer I565,infer I566,infer I567,infer I568,infer I569,infer I570,infer I571,infer I572,infer I573,infer I574,infer I575,infer I576,infer I577,infer I578,infer I579,infer I580,infer I581,infer I582,infer I583,infer I584,infer I585,infer I586,infer I587,infer I588,infer I589,infer I590,infer I591,infer I592,infer I593,infer I594,infer I595,infer I596,infer I597,infer I598,infer I599,infer I600,infer I601,infer I602,infer I603,infer I604,infer I605,infer I606,infer I607,infer I608,infer I609,infer I610,infer I611,infer I612,infer I613,infer I614,infer I615,infer I616,infer I617,infer I618,infer I619,infer I620,infer I621,infer I622,infer I623,infer I624,infer I625,infer I626,infer I627,infer I628,infer I629,infer I630,infer I631,infer I632,infer I633,infer I634,infer I635,infer I636,infer I637,infer I638,infer I639,infer I640,infer I641,infer I642,infer I643,infer I644,infer I645,infer I646,infer I647,infer I648,infer I649,infer I650,infer I651,infer I652,infer I653,infer I654,infer I655,infer I656,infer I657,infer I658,infer I659,infer I660,infer I661,infer I662,infer I663,infer I664,infer I665,infer I666,infer I667,infer I668,infer I669,infer I670,infer I671,infer I672,infer I673,infer I674,infer I675,infer I676,infer I677,infer I678,infer I679,infer I680,infer I681,infer I682,infer I683,infer I684,infer I685,infer I686,infer I687,infer I688,infer I689,infer I690,infer I691,infer I692,infer I693,infer I694,infer I695,infer I696,infer I697,infer I698,infer I699,infer I700,infer I701,infer I702,infer I703,infer I704,infer I705,infer I706,infer I707,infer I708,infer I709,infer I710,infer I711,infer I712,infer I713,infer I714,infer I715,infer I716,infer I717,infer I718,infer I719,infer I720,infer I721,infer I722,infer I723,infer I724,infer I725,infer I726,infer I727,infer I728,infer I729,infer I730,infer I731,infer I732,infer I733,infer I734,infer I735,infer I736,infer I737,infer I738,infer I739,infer I740,infer I741,infer I742,infer I743,infer I744,infer I745,infer I746,infer I747,infer I748,infer I749,infer I750,infer I751,infer I752,infer I753,infer I754,infer I755,infer I756,infer I757,infer I758,infer I759,infer I760,infer I761,infer I762,infer I763,infer I764,infer I765,infer I766,infer I767,infer I768,infer I769,infer I770,infer I771,infer I772,infer I773,infer I774,infer I775,infer I776,infer I777,infer I778,infer I779,infer I780,infer I781,infer I782,infer I783,infer I784,infer I785,infer I786,infer I787,infer I788,infer I789,infer I790,infer I791,infer I792,infer I793,infer I794,infer I795,infer I796,infer I797,infer I798,infer I799,infer I800,infer I801,infer I802,infer I803,infer I804,infer I805,infer I806,infer I807,infer I808,infer I809,infer I810,infer I811,infer I812,infer I813,infer I814,infer I815,infer I816,infer I817,infer I818,infer I819,infer I820,infer I821,infer I822,infer I823,infer I824,infer I825,infer I826,infer I827,infer I828,infer I829,infer I830,infer I831,infer I832,infer I833,infer I834,infer I835,infer I836,infer I837,infer I838,infer I839,infer I840,infer I841,infer I842,infer I843,infer I844,infer I845,infer I846,infer I847,infer I848,infer I849,infer I850,infer I851,infer I852,infer I853,infer I854,infer I855,infer I856,infer I857,infer I858,infer I859,infer I860,infer I861,infer I862,infer I863,infer I864,infer I865,infer I866,infer I867,infer I868,infer I869,infer I870,infer I871,infer I872,infer I873,infer I874,infer I875,infer I876,infer I877,infer I878,infer I879,infer I880,infer I881,infer I882,infer I883,infer I884,infer I885,infer I886,infer I887,infer I888,infer I889,infer I890,infer I891,infer I892,infer I893,infer I894,infer I895,infer I896,infer I897,infer I898,infer I899,infer I900,infer I901,infer I902,infer I903,infer I904,infer I905,infer I906,infer I907,infer I908,infer I909,infer I910,infer I911,infer I912,infer I913,infer I914,infer I915,infer I916,infer I917,infer I918,infer I919,infer I920,infer I921,infer I922,infer I923,infer I924,infer I925,infer I926,infer I927,infer I928,infer I929,infer I930,infer I931,infer I932,infer I933,infer I934,infer I935,infer I936,infer I937,infer I938,infer I939,infer I940,infer I941,infer I942,infer I943,infer I944,infer I945,infer I946,infer I947,infer I948,infer I949,infer I950,infer I951,infer I952,infer I953,infer I954,infer I955,infer I956,infer I957,infer I958,infer I959,infer I960,infer I961,infer I962,infer I963,infer I964,infer I965,infer I966,infer I967,infer I968,infer I969,infer I970,infer I971,infer I972,infer I973,infer I974,infer I975,infer I976,infer I977,infer I978,infer I979,infer I980,infer I981,infer I982,infer I983,infer I984,infer I985,infer I986,infer I987,infer I988,infer I989,infer I990,infer I991,infer I992,infer I993,infer I994,infer I995,infer I996,infer I997,infer I998,infer I999,infer I1000]?[[[I1],[I2],[I3],[I4],[I5],[I6],[I7],[I8],[I9],[I10],[I11],[I12],[I13],[I14],[I15],[I16],[I17],[I18],[I19],[I20],[I21],[I22],[I23],[I24],[I25],[I26],[I27],[I28],[I29],[I30],[I31],[I32],[I33],[I34],[I35],[I36],[I37],[I38],[I39],[I40],[I41],[I42],[I43],[I44],[I45],[I46],[I47],[I48],[I49],[I50],[I51],[I52],[I53],[I54],[I55],[I56],[I57],[I58],[I59],[I60],[I61],[I62],[I63],[I64],[I65],[I66],[I67],[I68],[I69],[I70],[I71],[I72],[I73],[I74],[I75],[I76],[I77],[I78],[I79],[I80],[I81],[I82],[I83],[I84],[I85],[I86],[I87],[I88],[I89],[I90],[I91],[I92],[I93],[I94],[I95],[I96],[I97],[I98],[I99],[I100],[I101],[I102],[I103],[I104],[I105],[I106],[I107],[I108],[I109],[I110],[I111],[I112],[I113],[I114],[I115],[I116],[I117],[I118],[I119],[I120],[I121],[I122],[I123],[I124],[I125],[I126],[I127],[I128],[I129],[I130],[I131],[I132],[I133],[I134],[I135],[I136],[I137],[I138],[I139],[I140],[I141],[I142],[I143],[I144],[I145],[I146],[I147],[I148],[I149],[I150],[I151],[I152],[I153],[I154],[I155],[I156],[I157],[I158],[I159],[I160],[I161],[I162],[I163],[I164],[I165],[I166],[I167],[I168],[I169],[I170],[I171],[I172],[I173],[I174],[I175],[I176],[I177],[I178],[I179],[I180],[I181],[I182],[I183],[I184],[I185],[I186],[I187],[I188],[I189],[I190],[I191],[I192],[I193],[I194],[I195],[I196],[I197],[I198],[I199],[I200],[I201],[I202],[I203],[I204],[I205],[I206],[I207],[I208],[I209],[I210],[I211],[I212],[I213],[I214],[I215],[I216],[I217],[I218],[I219],[I220],[I221],[I222],[I223],[I224],[I225],[I226],[I227],[I228],[I229],[I230],[I231],[I232],[I233],[I234],[I235],[I236],[I237],[I238],[I239],[I240],[I241],[I242],[I243],[I244],[I245],[I246],[I247],[I248],[I249],[I250],[I251],[I252],[I253],[I254],[I255],[I256],[I257],[I258],[I259],[I260],[I261],[I262],[I263],[I264],[I265],[I266],[I267],[I268],[I269],[I270],[I271],[I272],[I273],[I274],[I275],[I276],[I277],[I278],[I279],[I280],[I281],[I282],[I283],[I284],[I285],[I286],[I287],[I288],[I289],[I290],[I291],[I292],[I293],[I294],[I295],[I296],[I297],[I298],[I299],[I300],[I301],[I302],[I303],[I304],[I305],[I306],[I307],[I308],[I309],[I310],[I311],[I312],[I313],[I314],[I315],[I316],[I317],[I318],[I319],[I320],[I321],[I322],[I323],[I324],[I325],[I326],[I327],[I328],[I329],[I330],[I331],[I332],[I333],[I334],[I335],[I336],[I337],[I338],[I339],[I340],[I341],[I342],[I343],[I344],[I345],[I346],[I347],[I348],[I349],[I350],[I351],[I352],[I353],[I354],[I355],[I356],[I357],[I358],[I359],[I360],[I361],[I362],[I363],[I364],[I365],[I366],[I367],[I368],[I369],[I370],[I371],[I372],[I373],[I374],[I375],[I376],[I377],[I378],[I379],[I380],[I381],[I382],[I383],[I384],[I385],[I386],[I387],[I388],[I389],[I390],[I391],[I392],[I393],[I394],[I395],[I396],[I397],[I398],[I399],[I400],[I401],[I402],[I403],[I404],[I405],[I406],[I407],[I408],[I409],[I410],[I411],[I412],[I413],[I414],[I415],[I416],[I417],[I418],[I419],[I420],[I421],[I422],[I423],[I424],[I425],[I426],[I427],[I428],[I429],[I430],[I431],[I432],[I433],[I434],[I435],[I436],[I437],[I438],[I439],[I440],[I441],[I442],[I443],[I444],[I445],[I446],[I447],[I448],[I449],[I450],[I451],[I452],[I453],[I454],[I455],[I456],[I457],[I458],[I459],[I460],[I461],[I462],[I463],[I464],[I465],[I466],[I467],[I468],[I469],[I470],[I471],[I472],[I473],[I474],[I475],[I476],[I477],[I478],[I479],[I480],[I481],[I482],[I483],[I484],[I485],[I486],[I487],[I488],[I489],[I490],[I491],[I492],[I493],[I494],[I495],[I496],[I497],[I498],[I499],[I500],[I501],[I502],[I503],[I504],[I505],[I506],[I507],[I508],[I509],[I510],[I511],[I512],[I513],[I514],[I515],[I516],[I517],[I518],[I519],[I520],[I521],[I522],[I523],[I524],[I525],[I526],[I527],[I528],[I529],[I530],[I531],[I532],[I533],[I534],[I535],[I536],[I537],[I538],[I539],[I540],[I541],[I542],[I543],[I544],[I545],[I546],[I547],[I548],[I549],[I550],[I551],[I552],[I553],[I554],[I555],[I556],[I557],[I558],[I559],[I560],[I561],[I562],[I563],[I564],[I565],[I566],[I567],[I568],[I569],[I570],[I571],[I572],[I573],[I574],[I575],[I576],[I577],[I578],[I579],[I580],[I581],[I582],[I583],[I584],[I585],[I586],[I587],[I588],[I589],[I590],[I591],[I592],[I593],[I594],[I595],[I596],[I597],[I598],[I599],[I600],[I601],[I602],[I603],[I604],[I605],[I606],[I607],[I608],[I609],[I610],[I611],[I612],[I613],[I614],[I615],[I616],[I617],[I618],[I619],[I620],[I621],[I622],[I623],[I624],[I625],[I626],[I627],[I628],[I629],[I630],[I631],[I632],[I633],[I634],[I635],[I636],[I637],[I638],[I639],[I640],[I641],[I642],[I643],[I644],[I645],[I646],[I647],[I648],[I649],[I650],[I651],[I652],[I653],[I654],[I655],[I656],[I657],[I658],[I659],[I660],[I661],[I662],[I663],[I664],[I665],[I666],[I667],[I668],[I669],[I670],[I671],[I672],[I673],[I674],[I675],[I676],[I677],[I678],[I679],[I680],[I681],[I682],[I683],[I684],[I685],[I686],[I687],[I688],[I689],[I690],[I691],[I692],[I693],[I694],[I695],[I696],[I697],[I698],[I699],[I700],[I701],[I702],[I703],[I704],[I705],[I706],[I707],[I708],[I709],[I710],[I711],[I712],[I713],[I714],[I715],[I716],[I717],[I718],[I719],[I720],[I721],[I722],[I723],[I724],[I725],[I726],[I727],[I728],[I729],[I730],[I731],[I732],[I733],[I734],[I735],[I736],[I737],[I738],[I739],[I740],[I741],[I742],[I743],[I744],[I745],[I746],[I747],[I748],[I749],[I750],[I751],[I752],[I753],[I754],[I755],[I756],[I757],[I758],[I759],[I760],[I761],[I762],[I763],[I764],[I765],[I766],[I767],[I768],[I769],[I770],[I771],[I772],[I773],[I774],[I775],[I776],[I777],[I778],[I779],[I780],[I781],[I782],[I783],[I784],[I785],[I786],[I787],[I788],[I789],[I790],[I791],[I792],[I793],[I794],[I795],[I796],[I797],[I798],[I799],[I800],[I801],[I802],[I803],[I804],[I805],[I806],[I807],[I808],[I809],[I810],[I811],[I812],[I813],[I814],[I815],[I816],[I817],[I818],[I819],[I820],[I821],[I822],[I823],[I824],[I825],[I826],[I827],[I828],[I829],[I830],[I831],[I832],[I833],[I834],[I835],[I836],[I837],[I838],[I839],[I840],[I841],[I842],[I843],[I844],[I845],[I846],[I847],[I848],[I849],[I850],[I851],[I852],[I853],[I854],[I855],[I856],[I857],[I858],[I859],[I860],[I861],[I862],[I863],[I864],[I865],[I866],[I867],[I868],[I869],[I870],[I871],[I872],[I873],[I874],[I875],[I876],[I877],[I878],[I879],[I880],[I881],[I882],[I883],[I884],[I885],[I886],[I887],[I888],[I889],[I890],[I891],[I892],[I893],[I894],[I895],[I896],[I897],[I898],[I899],[I900],[I901],[I902],[I903],[I904],[I905],[I906],[I907],[I908],[I909],[I910],[I911],[I912],[I913],[I914],[I915],[I916],[I917],[I918],[I919],[I920],[I921],[I922],[I923],[I924],[I925],[I926],[I927],[I928],[I929],[I930],[I931],[I932],[I933],[I934],[I935],[I936],[I937],[I938],[I939],[I940],[I941],[I942],[I943],[I944],[I945],[I946],[I947],[I948],[I949],[I950],[I951],[I952],[I953],[I954],[I955],[I956],[I957],[I958],[I959],[I960],[I961],[I962],[I963],[I964],[I965],[I966],[I967],[I968],[I969],[I970],[I971],[I972],[I973],[I974],[I975],[I976],[I977],[I978],[I979],[I980],[I981],[I982],[I983],[I984],[I985],[I986],[I987],[I988],[I989],[I990],[I991],[I992],[I993],[I994],[I995],[I996],[I997],[I998],[I999],[I1000]],Rest]:[[],T]; //#endregion
//#endregion
//#region 100s
//prettier-ignore
type PeelRight100<T extends RA>=T extends[...infer Rest,infer I1,infer I2,infer I3,infer I4,infer I5,infer I6,infer I7,infer I8,infer I9,infer I10,infer I11,infer I12,infer I13,infer I14,infer I15,infer I16,infer I17,infer I18,infer I19,infer I20,infer I21,infer I22,infer I23,infer I24,infer I25,infer I26,infer I27,infer I28,infer I29,infer I30,infer I31,infer I32,infer I33,infer I34,infer I35,infer I36,infer I37,infer I38,infer I39,infer I40,infer I41,infer I42,infer I43,infer I44,infer I45,infer I46,infer I47,infer I48,infer I49,infer I50,infer I51,infer I52,infer I53,infer I54,infer I55,infer I56,infer I57,infer I58,infer I59,infer I60,infer I61,infer I62,infer I63,infer I64,infer I65,infer I66,infer I67,infer I68,infer I69,infer I70,infer I71,infer I72,infer I73,infer I74,infer I75,infer I76,infer I77,infer I78,infer I79,infer I80,infer I81,infer I82,infer I83,infer I84,infer I85,infer I86,infer I87,infer I88,infer I89,infer I90,infer I91,infer I92,infer I93,infer I94,infer I95,infer I96,infer I97,infer I98,infer I99,infer I100]?[[[I1],[I2],[I3],[I4],[I5],[I6],[I7],[I8],[I9],[I10],[I11],[I12],[I13],[I14],[I15],[I16],[I17],[I18],[I19],[I20],[I21],[I22],[I23],[I24],[I25],[I26],[I27],[I28],[I29],[I30],[I31],[I32],[I33],[I34],[I35],[I36],[I37],[I38],[I39],[I40],[I41],[I42],[I43],[I44],[I45],[I46],[I47],[I48],[I49],[I50],[I51],[I52],[I53],[I54],[I55],[I56],[I57],[I58],[I59],[I60],[I61],[I62],[I63],[I64],[I65],[I66],[I67],[I68],[I69],[I70],[I71],[I72],[I73],[I74],[I75],[I76],[I77],[I78],[I79],[I80],[I81],[I82],[I83],[I84],[I85],[I86],[I87],[I88],[I89],[I90],[I91],[I92],[I93],[I94],[I95],[I96],[I97],[I98],[I99],[I100]],Rest]:[[],T];
//#endregion
//#region 10s
//prettier-ignore
type PeelRight10<T extends RA>=T extends[...infer Rest,infer I1,infer I2,infer I3,infer I4,infer I5,infer I6,infer I7,infer I8,infer I9,infer I10]?[[[I1],[I2],[I3],[I4],[I5],[I6],[I7],[I8],[I9],[I10]],Rest]:[[],T];
//#endregion
//#region final peel
//prettier-ignore
type FinalPeelRight<T extends RA>=T extends[...infer Rest,infer I9,infer I8,infer I7,infer I6,infer I5,infer I4,infer I3,infer I2,infer I1]?[[[I9],[I8],[I7],[I6],[I5],[I4],[I3],[I2],[I1]],Rest]:T extends[...infer Rest,infer I8,infer I7,infer I6,infer I5,infer I4,infer I3,infer I2,infer I1]?[[[I8],[I7],[I6],[I5],[I4],[I3],[I2],[I1]],Rest]:T extends[...infer Rest,infer I7,infer I6,infer I5,infer I4,infer I3,infer I2,infer I1]?[[[I7],[I6],[I5],[I4],[I3],[I2],[I1]],Rest]:T extends[...infer Rest,infer I6,infer I5,infer I4,infer I3,infer I2,infer I1]?[[[I6],[I5],[I4],[I3],[I2],[I1]],Rest]:T extends[...infer Rest,infer I5,infer I4,infer I3,infer I2,infer I1]?[[[I5],[I4],[I3],[I2],[I1]],Rest]:T extends[...infer Rest,infer I4,infer I3,infer I2,infer I1]?[[[I4],[I3],[I2],[I1]],Rest]:T extends[...infer Rest,infer I3,infer I2,infer I1]?[[[I3],[I2],[I1]],Rest]:T extends[...infer Rest,infer I2,infer I1]?[[[I2],[I1]],Rest]:T extends[...infer Rest,infer I1]?[[[I1]],Rest]:[[],T];
//#endregion
//#region Passes
type PeelRightPass1000<T extends [RA, RA]> = T extends [
  infer Items extends RA,
  infer Rest extends RA
]
  ? PeelRight1000<Rest> extends [
      infer NewItems extends RA,
      infer NewRest extends RA
    ]
    ? [[...Items, ...NewItems], NewRest]
    : never
  : never;
type PeelRightTake1000s<T extends RA> = PeelRightPass1000<
  PeelRightPass1000<
    PeelRightPass1000<
      PeelRightPass1000<
        PeelRightPass1000<
          PeelRightPass1000<
            PeelRightPass1000<
              PeelRightPass1000<PeelRightPass1000<PeelRight1000<T>>>
            >
          >
        >
      >
    >
  >
>;
type PeelRightPass100<T extends [RA, RA]> = T extends [
  infer Items extends RA,
  infer Rest extends RA
]
  ? PeelRight100<Rest> extends [
      infer NewItems extends RA,
      infer NewRest extends RA
    ]
    ? [[...Items, ...NewItems], NewRest]
    : never
  : never;
type PeelRightTake100s<T extends RA> = PeelRightPass100<
  PeelRightPass100<
    PeelRightPass100<
      PeelRightPass100<
        PeelRightPass100<
          PeelRightPass100<
            PeelRightPass100<
              PeelRightPass100<PeelRightPass100<PeelRight100<T>>>
            >
          >
        >
      >
    >
  >
>;
type PeelRightPass10<T extends [RA, RA]> = T extends [
  infer Items extends RA,
  infer Rest extends RA
]
  ? PeelRight10<Rest> extends [
      infer NewItems extends RA,
      infer NewRest extends RA
    ]
    ? [[...Items, ...NewItems], NewRest]
    : never
  : never;
type PeelRightTake10s<T extends RA> = PeelRightPass10<
  PeelRightPass10<
    PeelRightPass10<
      PeelRightPass10<
        PeelRightPass10<
          PeelRightPass10<
            PeelRightPass10<PeelRightPass10<PeelRightPass10<PeelRight10<T>>>>
          >
        >
      >
    >
  >
>;
type PeelRight<T extends RA> = IsArrayStrict<T> extends true
  ? [T]
  : PeelRightTake1000s<T> extends [infer I1 extends RA, infer R1 extends RA]
  ? PeelRightTake100s<R1> extends [infer I2 extends RA, infer R2 extends RA]
    ? PeelRightTake10s<R2> extends [infer I3 extends RA, infer R3 extends RA]
      ? FinalPeelRight<R3> extends [infer I4 extends RA, infer R4 extends RA]
        ? [[R4], ...I4, ...I3, ...I2, ...I1]
        : never
      : never
    : never
  : never;
//#endregion
//#endregion

/**
 * Unflattens a tuple
 * 
 * eg
 * ```
 * [[]]
 * ```
 */
type Peel<T extends RA> = PeelLeft<T> extends [
  ...infer PeeledLeft extends RA,
  [infer Right extends RA]
]
  ? Right extends []
    ? PeeledLeft
    : IsArrayStrict<Right> extends true
    ? [...PeeledLeft, Right]
    : PeelRight<Right> extends [infer Middle extends RA, ...infer PeeledRight]
    ? [...PeeledLeft, ...Middle, ...PeeledRight]
    : never
  : never;
//#endregion

type FlattenToUnion<T> = T extends RA 
    ? T[number]
    : T

type HandleTuple<T extends RA> = 
  IsArrayStrict<T> extends true
    ? T extends readonly (infer U)[]
      ? FlattenToUnion<U>[]
      : never
    : T

type FlattenOneLayer<T extends RA> = 
  IsArrayStrict<T> extends true
  ? HandleTuple<T>
  : Peel<T> extends infer Peeled extends RA
  ? Concat<[...{
          [K in keyof Peeled]: K extends `${number}`
            ? Peeled[K] extends infer Arr extends RA
              ? IsArrayStrict<Arr> extends true
                ? (FlattenToUnion<Arr[number]>)[]
                : Arr extends [infer Item]
                  ? Item extends RA
                    ? Item
                    : [Item]
                  : never
            : never
            : Peeled[K];
        }]>
  : never;

type ApplyModifier<From extends RA, To extends RA> = From extends any[]
  ? [...To]
  : readonly [...To];
type ToMutable<T extends RA> = [...T];

/**
 * WARNING: DO NOT attempt to modify ONLY one of the types
 * these are chained and copied code.
 * IF AND ONLY IF a change is needed apply it to all of them
 */
namespace Flatten {
  export type Flatten0<
    T extends RA,
    Depth extends number,
    LocalDepth extends any[] = Iterator.Iterator<0>,
    CurrentDepth extends any[] = Iterator.Iterator<0>,
    Previous extends RA = []
  > = T extends []
    ? Previous extends []
      ? []
      : [Previous]
    : Equal<T, Previous> extends true
    ? T
    : Iterator.Get<CurrentDepth> extends Depth
    ? T
    : Iterator.Get<LocalDepth> extends 999
    ? Flatten1<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >
    : Flatten0<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >;
  type Flatten1<
    T extends RA,
    Depth extends number,
    LocalDepth extends any[] = Iterator.Iterator<0>,
    CurrentDepth extends any[] = Iterator.Iterator<0>,
    Previous extends RA = []
  > = T extends []
    ? Previous extends []
      ? []
      : [Previous]
    : Equal<T, Previous> extends true
    ? T
    : Iterator.Get<CurrentDepth> extends Depth
    ? T
    : Iterator.Get<LocalDepth> extends 999
    ? Flatten2<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >
    : Flatten1<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >;
  type Flatten2<
    T extends RA,
    Depth extends number,
    LocalDepth extends any[] = Iterator.Iterator<0>,
    CurrentDepth extends any[] = Iterator.Iterator<0>,
    Previous extends RA = []
  > = T extends []
    ? Previous extends []
      ? []
      : [Previous]
    : Equal<T, Previous> extends true
    ? T
    : Iterator.Get<CurrentDepth> extends Depth
    ? T
    : Iterator.Get<LocalDepth> extends 999
    ? Flatten3<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >
    : Flatten2<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >;
  type Flatten3<
    T extends RA,
    Depth extends number,
    LocalDepth extends any[] = Iterator.Iterator<0>,
    CurrentDepth extends any[] = Iterator.Iterator<0>,
    Previous extends RA = []
  > = T extends []
    ? Previous extends []
      ? []
      : [Previous]
    : Equal<T, Previous> extends true
    ? T
    : Iterator.Get<CurrentDepth> extends Depth
    ? T
    : Iterator.Get<LocalDepth> extends 999
    ? Flatten4<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >
    : Flatten3<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >;
  type Flatten4<
    T extends RA,
    Depth extends number,
    LocalDepth extends any[] = Iterator.Iterator<0>,
    CurrentDepth extends any[] = Iterator.Iterator<0>,
    Previous extends RA = []
  > = T extends []
    ? Previous extends []
      ? []
      : [Previous]
    : Equal<T, Previous> extends true
    ? T
    : Iterator.Get<CurrentDepth> extends Depth
    ? T
    : Iterator.Get<LocalDepth> extends 999
    ? Flatten5<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >
    : Flatten4<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >;
  type Flatten5<
    T extends RA,
    Depth extends number,
    LocalDepth extends any[] = Iterator.Iterator<0>,
    CurrentDepth extends any[] = Iterator.Iterator<0>,
    Previous extends RA = []
  > = T extends []
    ? Previous extends []
      ? []
      : [Previous]
    : Equal<T, Previous> extends true
    ? T
    : Iterator.Get<CurrentDepth> extends Depth
    ? T
    : Iterator.Get<LocalDepth> extends 999
    ? Flatten6<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >
    : Flatten5<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >;
  type Flatten6<
    T extends RA,
    Depth extends number,
    LocalDepth extends any[] = Iterator.Iterator<0>,
    CurrentDepth extends any[] = Iterator.Iterator<0>,
    Previous extends RA = []
  > = T extends []
    ? Previous extends []
      ? []
      : [Previous]
    : Equal<T, Previous> extends true
    ? T
    : Iterator.Get<CurrentDepth> extends Depth
    ? T
    : Iterator.Get<LocalDepth> extends 999
    ? Flatten7<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >
    : Flatten6<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >;
  type Flatten7<
    T extends RA,
    Depth extends number,
    LocalDepth extends any[] = Iterator.Iterator<0>,
    CurrentDepth extends any[] = Iterator.Iterator<0>,
    Previous extends RA = []
  > = T extends []
    ? Previous extends []
      ? []
      : [Previous]
    : Equal<T, Previous> extends true
    ? T
    : Iterator.Get<CurrentDepth> extends Depth
    ? T
    : Iterator.Get<LocalDepth> extends 999
    ? Flatten8<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >
    : Flatten7<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >;
  type Flatten8<
    T extends RA,
    Depth extends number,
    LocalDepth extends any[] = Iterator.Iterator<0>,
    CurrentDepth extends any[] = Iterator.Iterator<0>,
    Previous extends RA = []
  > = T extends []
    ? Previous extends []
      ? []
      : [Previous]
    : Equal<T, Previous> extends true
    ? T
    : Iterator.Get<CurrentDepth> extends Depth
    ? T
    : Iterator.Get<LocalDepth> extends 999
    ? Flatten9<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >
    : Flatten8<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >;
  type Flatten9<
    T extends RA,
    Depth extends number,
    LocalDepth extends any[] = Iterator.Iterator<0>,
    CurrentDepth extends any[] = Iterator.Iterator<0>,
    Previous extends RA = []
  > = T extends []
    ? Previous extends []
      ? []
      : [Previous]
    : Equal<T, Previous> extends true
    ? T
    : Iterator.Get<CurrentDepth> extends Depth
    ? T
    : Iterator.Get<LocalDepth> extends 999
    ? T
    : Flatten9<
        ApplyModifier<T, FlattenOneLayer<ToMutable<T>>>,
        Depth,
        Iterator.Next<LocalDepth>,
        Iterator.Next<CurrentDepth>,
        T
      >;
}
export type Flatten<T extends RA, Depth extends number> = Flatten.Flatten0<
  T,
  Depth
>;