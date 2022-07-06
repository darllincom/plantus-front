import { IconsProps } from './icons-props';

export default function Edit({ size }: IconsProps) {
	return (
		<>
			{(() => {
				switch (size) {
					case 'lg':
						return (
							<svg
								width="33"
								height="28"
								viewBox="0 0 33 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M32.9972 3.67553V4.3151C32.9744 4.35136 32.9554 4.38987 32.9406 4.43003C32.8939 4.61657 32.864 4.80645 32.8074 4.98799C32.6656 5.42236 32.4244 5.81759 32.1028 6.1422C32.0479 6.2005 32.0162 6.18717 31.9663 6.1422C31.813 5.97565 31.6565 5.83074 31.5016 5.67418L27.8241 1.99667C27.7275 1.90007 27.7258 1.8934 27.8241 1.79847C28.0266 1.60575 28.2575 1.44512 28.5086 1.32213C28.8435 1.15204 29.2073 1.04639 29.5812 1.01068C30.0548 0.957798 30.5343 1.00779 30.9869 1.15725C31.4947 1.32687 31.944 1.637 32.2827 2.05164C32.6356 2.47346 32.863 2.98592 32.9389 3.53065C32.9522 3.58121 32.9718 3.62988 32.9972 3.67553Z"
									fill="#78B608"
								/>
								<path
									d="M12.4208 20.2434C12.4267 19.9157 12.5028 19.5931 12.644 19.2974C12.8772 18.7761 13.1254 18.2598 13.3619 17.7401C13.7129 16.9357 14.1285 16.1609 14.6044 15.4233C15.1957 14.5362 15.8735 13.71 16.628 12.9567C19.8069 9.78993 22.9804 6.61765 26.1482 3.4398C26.2398 3.34819 26.2465 3.34819 26.3397 3.4398C27.7255 4.82553 29.1134 6.21348 30.5036 7.60365C30.5702 7.67027 30.5636 7.71356 30.5036 7.77019L22.7722 15.4983C22.1409 16.1295 21.5063 16.7591 20.8768 17.3937C20.1744 18.0951 19.4138 18.7359 18.6033 19.3091C17.9807 19.7536 17.3278 20.1542 16.6496 20.5083C16.2399 20.7214 15.8418 20.9563 15.4321 21.1745C15.1402 21.3387 14.8368 21.4818 14.5244 21.6025C14.2609 21.7202 13.9699 21.7621 13.6839 21.7236C13.398 21.685 13.1284 21.5676 12.9055 21.3843C12.7413 21.2452 12.6119 21.0695 12.5277 20.8714C12.4436 20.6733 12.407 20.4582 12.4208 20.2434Z"
									fill="#78B608"
								/>
								<path
									d="M6.01035 27.5804H4.2149C3.90677 27.5804 3.59698 27.5804 3.28719 27.5804C3.26058 27.5661 3.23193 27.556 3.20225 27.5504C3.03569 27.5504 2.86914 27.5504 2.70258 27.5504C2.3878 27.5404 2.07301 27.5254 1.75822 27.5121C1.74823 27.5121 1.73824 27.5239 1.72658 27.5305L1.68494 27.5222L1.4934 27.4388C1.49209 27.4391 1.49074 27.4391 1.48944 27.4388C1.48813 27.4385 1.4869 27.438 1.48581 27.4372C1.48473 27.4364 1.48381 27.4354 1.48311 27.4342C1.48241 27.4331 1.48194 27.4319 1.48174 27.4306L1.43344 27.3972C1.43174 27.3985 1.4297 27.3991 1.42761 27.3991C1.42552 27.3991 1.42348 27.3985 1.42178 27.3972L1.3535 27.344L1.24191 27.209L1.13198 27.0591L1.11699 27.0291C1.08868 26.9275 1.06036 26.8276 1.03038 26.726C1.03038 26.7143 1.00873 26.7077 0.99707 26.6977V26.3646C1.01702 26.3375 1.03431 26.3085 1.0487 26.278C1.06702 26.228 1.07036 26.1731 1.09367 26.1264C1.17515 25.9386 1.31105 25.7794 1.48384 25.6696C1.65662 25.5597 1.85836 25.5043 2.06302 25.5102C2.41944 25.5102 2.77587 25.5202 3.13229 25.5235L5.86045 25.5434C7.03965 25.5512 8.21941 25.5579 9.39972 25.5635L16.32 25.5835C17.3027 25.5835 18.2854 25.5968 19.2697 25.6034C20.2091 25.6034 21.1484 25.6184 22.0878 25.6217C23.0871 25.6217 24.0948 25.6217 25.0991 25.6217C25.2382 25.6248 25.3746 25.6608 25.4972 25.7267C25.6475 25.8012 25.7767 25.9123 25.8728 26.0498C25.9688 26.1873 26.0288 26.3467 26.047 26.5134C26.0653 26.6802 26.0413 26.8489 25.9772 27.0039C25.9131 27.159 25.811 27.2954 25.6804 27.4006C25.4931 27.5536 25.2558 27.6319 25.0142 27.6204C24.3713 27.6204 23.7284 27.6037 23.0855 27.6021C21.6487 27.6021 20.2119 27.6021 18.7751 27.6021C18.7433 27.6055 18.7121 27.6122 18.6818 27.6221H16.878H16.0103C15.9808 27.6076 15.9494 27.5975 15.917 27.5921L13.1389 27.5705C11.9497 27.5682 10.7599 27.5671 9.56961 27.5671C8.41261 27.5671 7.25617 27.5671 6.10029 27.5671C6.06993 27.5684 6.03979 27.5729 6.01035 27.5804Z"
									fill="#78B608"
								/>
							</svg>
						);

					default:
						return (
							<svg
								width="17"
								height="14"
								viewBox="0 0 17 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.9971 1.34265V1.66243C16.9857 1.68056 16.9763 1.69982 16.9688 1.7199C16.9455 1.81317 16.9305 1.90811 16.9022 1.99888C16.8313 2.21606 16.7107 2.41368 16.5499 2.57598C16.5225 2.60513 16.5066 2.59847 16.4817 2.57598C16.405 2.49271 16.3268 2.42025 16.2493 2.34197L14.4106 0.50322C14.3623 0.454919 14.3614 0.451585 14.4106 0.404117C14.5119 0.307757 14.6273 0.227443 14.7528 0.165949C14.9203 0.0809032 15.1022 0.0280802 15.2891 0.0102237C15.526 -0.0162182 15.7657 0.00877702 15.992 0.0835054C16.2459 0.168319 16.4705 0.323383 16.6399 0.530705C16.8164 0.741612 16.93 0.997842 16.968 1.27021C16.9746 1.29549 16.9844 1.31982 16.9971 1.34265V1.34265Z"
									fill="#78B608"
								/>
								<path
									d="M6.70944 9.62562C6.71236 9.46178 6.75042 9.30048 6.82103 9.15261C6.93762 8.89195 7.0617 8.63379 7.17996 8.37397C7.3555 7.97174 7.56326 7.58434 7.8012 7.21558C8.09687 6.77203 8.4358 6.35889 8.81302 5.98225C10.4025 4.39887 11.9892 2.81273 13.5731 1.2238C13.6189 1.178 13.6223 1.178 13.6689 1.2238C14.3618 1.91667 15.0557 2.61065 15.7508 3.30573C15.7841 3.33904 15.7808 3.36069 15.7508 3.389L11.8851 7.25305C11.5695 7.56867 11.2522 7.88346 10.9374 8.20075C10.5862 8.55148 10.2059 8.87186 9.80069 9.15844C9.48935 9.38068 9.16295 9.58103 8.82384 9.75804C8.61898 9.86463 8.41995 9.98205 8.21509 10.0911C8.06912 10.1733 7.91744 10.2448 7.76123 10.3052C7.6295 10.364 7.48398 10.385 7.34099 10.3657C7.19801 10.3464 7.06322 10.2877 6.95177 10.1961C6.86966 10.1265 6.80498 10.0387 6.7629 9.93961C6.72082 9.84055 6.70251 9.73302 6.70944 9.62562V9.62562Z"
									fill="#78B608"
								/>
								<path
									d="M3.50371 13.2951H2.60598C2.45192 13.2951 2.29702 13.2951 2.14213 13.2951C2.12882 13.288 2.1145 13.2829 2.09966 13.2801C2.01638 13.2801 1.9331 13.2801 1.84983 13.2801C1.69243 13.2751 1.53504 13.2676 1.37765 13.2609C1.37265 13.2609 1.36765 13.2668 1.36182 13.2701L1.341 13.266L1.24524 13.2243C1.24458 13.2244 1.2439 13.2244 1.24325 13.2243C1.2426 13.2241 1.24199 13.2239 1.24144 13.2235C1.2409 13.2231 1.24044 13.2226 1.24009 13.222C1.23974 13.2214 1.23951 13.2208 1.23941 13.2202L1.21526 13.2035C1.21441 13.2041 1.21339 13.2044 1.21234 13.2044C1.2113 13.2044 1.21028 13.2041 1.20943 13.2035L1.17528 13.1769L1.11949 13.1094L1.06452 13.0345L1.05703 13.0195C1.04287 12.9687 1.02872 12.9187 1.01373 12.8679C1.01373 12.8621 1.0029 12.8588 0.99707 12.8538V12.6872C1.00705 12.6736 1.01569 12.6591 1.02289 12.6439C1.03205 12.6189 1.03371 12.5914 1.04537 12.5681C1.08611 12.4742 1.15406 12.3946 1.24045 12.3397C1.32684 12.2848 1.42771 12.257 1.53004 12.26C1.70826 12.26 1.88647 12.265 2.06468 12.2666L3.42876 12.2766C4.01836 12.2805 4.60824 12.2838 5.1984 12.2866L8.65856 12.2966C9.14989 12.2966 9.64123 12.3033 10.1334 12.3066C10.6031 12.3066 11.0728 12.3141 11.5424 12.3157C12.0421 12.3157 12.5459 12.3157 13.0481 12.3157C13.1176 12.3173 13.1859 12.3353 13.2471 12.3682C13.3223 12.4055 13.3869 12.461 13.4349 12.5298C13.483 12.5985 13.5129 12.6782 13.5221 12.7616C13.5312 12.845 13.5192 12.9293 13.4871 13.0069C13.4551 13.0844 13.4041 13.1526 13.3387 13.2052C13.2451 13.2817 13.1264 13.3208 13.0056 13.3151C12.6842 13.3151 12.3627 13.3068 12.0413 13.3059C11.3229 13.3059 10.6045 13.3059 9.88606 13.3059C9.87021 13.3076 9.85458 13.311 9.83943 13.3159H8.93754H8.50366C8.48894 13.3087 8.47323 13.3036 8.45703 13.3009L7.06797 13.2901C6.47337 13.289 5.87849 13.2884 5.28334 13.2884C4.70484 13.2884 4.12662 13.2884 3.54868 13.2884C3.5335 13.2891 3.51843 13.2913 3.50371 13.2951V13.2951Z"
									fill="#78B608"
								/>
							</svg>
						);
				}
			})()}
		</>
	);
}
