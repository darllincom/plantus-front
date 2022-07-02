import { IconsProps } from './icons-props';

export default function ProfileSelected({ size }: IconsProps) {
	return (
		<>
			{(() => {
				switch (size) {
					case 'lg':
						return (
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.1433 0.00988643C16.1633 0.0258814 16.1833 0.0518796 16.2053 0.053879C16.5752 0.107862 16.9511 0.137854 17.315 0.217829C17.6666 0.294833 18.0122 0.397732 18.3486 0.525716C18.7177 0.665713 19.0788 0.825885 19.4303 1.00555C19.9598 1.28254 20.4528 1.6244 20.8978 2.02323C21.3912 2.45369 21.8297 2.94323 22.2034 3.48078C22.5428 3.968 22.8278 4.49096 23.0532 5.04029C23.2408 5.49738 23.3866 5.97049 23.489 6.45385C23.6438 7.17064 23.6923 7.90629 23.633 8.63719C23.599 9.05106 23.525 9.46289 23.453 9.87276C23.3623 10.3339 23.2215 10.7838 23.0332 11.2144C22.8341 11.6943 22.5877 12.1531 22.2974 12.584C21.9484 13.1085 21.5383 13.5897 21.0758 14.0175C20.5665 14.4865 20.0002 14.8895 19.3903 15.2171C18.9706 15.449 18.5285 15.6379 18.0707 15.7809C17.6238 15.9126 17.1691 16.0161 16.7092 16.0908C16.1405 16.1937 15.5597 16.2119 14.9857 16.1448C14.6138 16.0969 14.2399 16.0589 13.874 15.9869C13.5838 15.927 13.2984 15.8455 13.0203 15.7429C12.6742 15.6225 12.3345 15.4844 12.0026 15.3291C11.3801 15.0252 10.8011 14.6392 10.2812 14.1815C9.64201 13.6261 9.09416 12.9736 8.65768 12.2481C8.37038 11.774 8.13445 11.2706 7.95389 10.7465C7.77817 10.2395 7.65229 9.71647 7.57802 9.18499C7.49603 8.61361 7.47859 8.0348 7.52603 7.45952C7.57202 6.9181 7.67044 6.38245 7.81993 5.86004C8.10913 4.85292 8.59276 3.91215 9.2435 3.09089C9.87107 2.29434 10.6446 1.62462 11.5228 1.11751C12.0107 0.832508 12.5274 0.599982 13.0643 0.423758C13.6646 0.221892 14.288 0.0969255 14.9197 0.0518655C14.9536 0.0424903 14.9855 0.0268766 15.0137 0.00585938L16.1433 0.00988643ZM15.5855 1.40947C13.8131 1.40574 12.1115 2.10484 10.8537 3.35363C9.59595 4.60241 8.88461 6.29893 8.87562 8.07133C8.86054 9.83351 9.54117 11.5305 10.7697 12.7939C11.9983 14.0573 13.6756 14.7851 15.4376 14.8192C16.3369 14.8405 17.2313 14.6803 18.0673 14.348C18.9033 14.0157 19.6637 13.5182 20.303 12.8852C20.9422 12.2523 21.4473 11.4969 21.7879 10.6643C22.1286 9.83164 22.2978 8.93888 22.2854 8.03935C22.2711 6.27254 21.5587 4.58308 20.3036 3.33953C19.0484 2.09598 17.3524 1.39925 15.5855 1.40142V1.40947Z"
									fill="#7AB60B"
								/>
								<path
									d="M6.43434 32.0057C6.41035 31.9937 6.38438 31.9697 6.36039 31.9697C5.79875 31.9656 5.24032 31.8842 4.70088 31.7278C4.27136 31.6041 3.85592 31.4358 3.46127 31.2259C3.04881 31.0094 2.66069 30.7493 2.30362 30.4502C1.79603 30.0244 1.35823 29.5218 1.00605 28.9606C0.795724 28.6261 0.615706 28.2736 0.468194 27.907C0.29645 27.486 0.17112 27.0476 0.0943486 26.5994C0.00231931 26.12 -0.0232351 25.6302 0.0183837 25.1438C0.0563718 24.7879 0.0843025 24.4261 0.15628 24.0762C0.243306 23.6289 0.39131 23.1957 0.596145 22.7886C0.742099 22.5027 0.892055 22.2167 1.062 21.9468C1.21984 21.7002 1.39493 21.4651 1.58589 21.2431C1.95551 20.8148 2.38042 20.4377 2.84947 20.1215C3.26668 19.8377 3.71559 19.6034 4.18706 19.4236C4.60544 19.2636 5.03976 19.149 5.48261 19.0818C5.765 19.0368 6.05041 19.0133 6.33635 19.0117C12.5691 19.0117 18.8024 19.0117 25.0365 19.0117C25.3398 19.0167 25.642 19.0523 25.9382 19.1178C26.2965 19.1924 26.6503 19.2872 26.9979 19.4016C27.4941 19.5744 27.9648 19.8132 28.3974 20.1115C28.8383 20.41 29.2411 20.7611 29.5971 21.157C29.9035 21.4987 30.1716 21.8729 30.3968 22.2728C30.6414 22.6905 30.8328 23.1371 30.9666 23.6023C31.0706 23.9702 31.1206 24.3521 31.1946 24.7279C31.2106 24.8099 31.2326 24.89 31.2526 24.9699C31.2526 25.3698 31.2686 25.7697 31.2526 26.1576C31.2319 26.4142 31.1884 26.6684 31.1226 26.9173C31.0606 27.1772 30.9787 27.4332 30.8927 27.6871C30.7311 28.1542 30.5122 28.5994 30.2409 29.0126C29.7287 29.8114 29.0459 30.4867 28.2415 30.99C27.7684 31.2916 27.2565 31.5277 26.72 31.6918C26.3065 31.8264 25.8794 31.9142 25.4464 31.9537C25.1805 31.9737 24.9126 31.9976 24.6467 31.9976H6.42836L6.43434 32.0057ZM21.0618 20.3533C20.8219 20.3533 20.5819 20.3533 20.34 20.3533C20.098 20.3533 19.9081 20.3533 19.6942 20.3533C19.5602 20.3533 19.4263 20.3633 19.2943 20.3633C15.065 20.3633 10.8349 20.3633 6.60427 20.3633C5.85653 20.3517 5.11472 20.4975 4.42698 20.7912C3.8911 21.0238 3.39939 21.3471 2.97345 21.7469C2.42739 22.2586 2.00014 22.8837 1.72183 23.5783C1.52525 24.0676 1.40453 24.5842 1.36391 25.1099C1.32007 25.6862 1.37553 26.2658 1.52786 26.8234C1.68451 27.4153 1.94811 27.9736 2.30563 28.4708C2.87815 29.2775 3.6738 29.8995 4.59489 30.2603C5.1735 30.4942 5.79222 30.6131 6.41634 30.6101H19.2983C19.3455 30.6136 19.3923 30.6209 19.4383 30.6321C19.4383 30.7301 19.5162 30.6862 19.5562 30.6862H24.3548C24.3787 30.6862 24.4087 30.6862 24.4287 30.6862C24.4487 30.6862 24.4627 30.6462 24.4787 30.6242C24.5114 30.6157 24.5449 30.6104 24.5787 30.6082C25.1735 30.6244 25.7667 30.5377 26.3321 30.3522C26.7559 30.2156 27.1594 30.0226 27.5317 29.7784C28.48 29.1625 29.1956 28.2478 29.5651 27.1792C29.7365 26.6955 29.833 26.1885 29.851 25.6756C29.8797 24.9672 29.7584 24.2607 29.4951 23.6023C29.2671 23.0227 28.9343 22.4899 28.5134 22.0308C27.9806 21.4471 27.3194 20.9954 26.582 20.7113C26.2008 20.5598 25.8017 20.4583 25.3944 20.4094C25.0165 20.3674 24.6346 20.3654 24.2527 20.3454H21.0718L21.0618 20.3533Z"
									fill="#2C6A06"
								/>
								<path
									d="M24.2412 20.342C24.2262 20.3916 24.2161 20.4424 24.2111 20.494C24.2111 23.8263 24.2111 27.1585 24.2111 30.4908C24.2111 30.5828 24.2411 30.6228 24.3331 30.6168C24.3791 30.6168 24.4251 30.6168 24.4711 30.6168C24.4551 30.6388 24.4431 30.6668 24.4211 30.6788C24.3991 30.6908 24.3731 30.6788 24.3471 30.6788H19.5486C19.5086 30.6788 19.4327 30.7228 19.4307 30.6248C19.6886 30.6068 19.6886 30.6068 19.6886 30.3389C19.6886 27.0559 19.6886 23.7737 19.6886 20.492C19.6886 20.442 19.6886 20.394 19.6886 20.344C19.9045 20.344 20.1204 20.344 20.3344 20.344C20.5483 20.344 20.8142 20.344 21.0561 20.344C21.0561 20.394 21.0442 20.442 21.0442 20.492C21.0442 23.8243 21.0442 27.1566 21.0442 30.4889C21.0442 30.5829 21.0722 30.6108 21.1661 30.6108C21.6833 30.6108 22.2005 30.6108 22.7177 30.6108C22.8216 30.6108 22.8496 30.5748 22.8496 30.4749C22.8496 27.1546 22.8496 23.8335 22.8496 20.5119C22.8461 20.4522 22.8387 20.3928 22.8276 20.334L24.2412 20.342Z"
									fill="#7AB60B"
								/>
							</svg>
						);

					default:
						return (
							<svg
								width="16"
								height="17"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.07497 0.00201416C8.08497 0.0100142 8.09497 0.0230173 8.10597 0.0240173C8.29097 0.0510173 8.47897 0.0660181 8.66097 0.106018C8.83686 0.144532 9.00968 0.195998 9.17798 0.26001C9.36257 0.33003 9.54318 0.410141 9.71898 0.5C9.98382 0.638538 10.2304 0.809523 10.453 1.009C10.6997 1.2243 10.919 1.46914 11.106 1.73801C11.2757 1.98169 11.4182 2.24325 11.531 2.51801C11.6248 2.74662 11.6978 2.98325 11.749 3.22501C11.8264 3.58351 11.8506 3.95146 11.821 4.31702C11.804 4.52402 11.767 4.73 11.731 4.935C11.6856 5.16564 11.6152 5.39065 11.521 5.60602C11.4214 5.84604 11.2982 6.07551 11.153 6.29102C10.9784 6.55336 10.7733 6.79406 10.542 7.00803C10.2873 7.24261 10.004 7.44417 9.69897 7.608C9.48903 7.724 9.26791 7.81849 9.03898 7.89001C8.81544 7.95588 8.588 8.00765 8.35798 8.04501C8.07354 8.09645 7.78307 8.10556 7.49598 8.07202C7.30998 8.04802 7.12298 8.02901 6.93998 7.99301C6.79479 7.96308 6.65206 7.92229 6.51297 7.871C6.33988 7.81076 6.16998 7.74167 6.00397 7.664C5.69261 7.512 5.40303 7.31897 5.14297 7.09003C4.82329 6.81225 4.54928 6.48592 4.33097 6.12302C4.18728 5.88591 4.06928 5.63414 3.97897 5.37201C3.89108 5.1184 3.82812 4.85683 3.79097 4.591C3.74997 4.30522 3.74125 4.01573 3.76497 3.728C3.78797 3.4572 3.8372 3.18929 3.91197 2.92801C4.05661 2.42429 4.2985 1.95376 4.62397 1.543C4.93786 1.1446 5.32475 0.809632 5.76397 0.556C6.00801 0.413454 6.26645 0.297154 6.53497 0.209015C6.8352 0.10805 7.14702 0.0455473 7.46297 0.0230103C7.47993 0.0183212 7.49587 0.0105119 7.50998 0L8.07497 0.00201416ZM7.79597 0.702026C6.90949 0.700162 6.05843 1.04982 5.42934 1.67441C4.80025 2.29899 4.44447 3.14752 4.43998 4.034C4.43244 4.91536 4.77286 5.76414 5.38733 6.39603C6.00181 7.02792 6.84074 7.39191 7.72197 7.409C8.17179 7.41966 8.61914 7.33951 9.03727 7.17331C9.45539 7.0071 9.8357 6.75828 10.1554 6.44171C10.4752 6.12514 10.7278 5.74732 10.8982 5.33087C11.0685 4.91443 11.1531 4.46791 11.147 4.01801C11.1398 3.13432 10.7835 2.28933 10.1557 1.66736C9.52797 1.04539 8.67969 0.696913 7.79597 0.697998V0.702026Z"
									fill="#7AB60B"
								/>
								<path
									d="M3.21867 16.0049C3.20667 15.9989 3.19368 15.9869 3.18168 15.9869C2.90077 15.9848 2.62147 15.9441 2.35166 15.8659C2.13684 15.804 1.92905 15.7198 1.73167 15.6149C1.52537 15.5066 1.33125 15.3765 1.15266 15.2269C0.898785 15.0139 0.679816 14.7625 0.503671 14.4819C0.398475 14.3146 0.308438 14.1382 0.234659 13.9549C0.14876 13.7443 0.0860754 13.525 0.0476775 13.3009C0.00164845 13.0611 -0.0111327 12.8161 0.00968315 12.5729C0.0286831 12.3949 0.0426529 12.2139 0.0786529 12.0389C0.122179 11.8152 0.196205 11.5985 0.298654 11.3949C0.371654 11.2519 0.446656 11.1089 0.531656 10.9739C0.610598 10.8505 0.698173 10.7329 0.79368 10.6219C0.978552 10.4077 1.19107 10.2191 1.42567 10.0609C1.63434 9.91897 1.85887 9.80178 2.09467 9.71185C2.30393 9.63183 2.52116 9.57454 2.74265 9.54089C2.88389 9.5184 3.02664 9.50667 3.16966 9.50586C6.28699 9.50586 9.40465 9.50586 12.5227 9.50586C12.6744 9.50837 12.8255 9.52617 12.9737 9.5589C13.1529 9.59625 13.3298 9.64362 13.5037 9.70087C13.7519 9.78729 13.9873 9.90674 14.2037 10.0559C14.4241 10.2052 14.6256 10.3808 14.8037 10.5789C14.9569 10.7497 15.091 10.9369 15.2037 11.1369C15.326 11.3458 15.4217 11.5692 15.4887 11.8019C15.5407 11.9859 15.5657 12.1769 15.6027 12.3649C15.6107 12.4059 15.6217 12.4459 15.6317 12.4859C15.6317 12.6859 15.6397 12.8859 15.6317 13.0799C15.6214 13.2082 15.5996 13.3354 15.5667 13.4599C15.5357 13.5899 15.4947 13.7179 15.4517 13.8449C15.3709 14.0785 15.2614 14.3012 15.1257 14.5079C14.8695 14.9074 14.528 15.2451 14.1257 15.4969C13.889 15.6477 13.633 15.7658 13.3647 15.8479C13.1579 15.9152 12.9442 15.9591 12.7277 15.9789C12.5947 15.9889 12.4607 16.0009 12.3277 16.0009H3.21568L3.21867 16.0049ZM10.5347 10.1769C10.4147 10.1769 10.2947 10.1769 10.1737 10.1769C10.0527 10.1769 9.95766 10.1769 9.85066 10.1769C9.78366 10.1769 9.71667 10.1819 9.65067 10.1819C7.53534 10.1819 5.41966 10.1819 3.30366 10.1819C2.92967 10.1761 2.55865 10.249 2.21467 10.3959C1.94665 10.5122 1.70072 10.6739 1.48768 10.8739C1.21456 11.1298 1.00087 11.4424 0.861673 11.7899C0.763353 12.0346 0.702974 12.293 0.682657 12.5559C0.66073 12.8442 0.688467 13.134 0.764657 13.4129C0.843007 13.709 0.97485 13.9882 1.15367 14.2369C1.44002 14.6404 1.83796 14.9514 2.29865 15.1319C2.58805 15.2489 2.89751 15.3084 3.20966 15.3069H9.65266C9.67625 15.3086 9.69967 15.3123 9.72267 15.3179C9.72267 15.3669 9.76166 15.3449 9.78166 15.3449H12.1817C12.1937 15.3449 12.2087 15.3449 12.2187 15.3449C12.2287 15.3449 12.2357 15.3249 12.2437 15.3139C12.26 15.3097 12.2768 15.307 12.2937 15.3059C12.5912 15.314 12.8879 15.2707 13.1707 15.1779C13.3826 15.1095 13.5844 15.013 13.7707 14.8909C14.2449 14.5828 14.6028 14.1253 14.7877 13.5909C14.8734 13.349 14.9216 13.0954 14.9307 12.8389C14.945 12.4845 14.8843 12.1312 14.7527 11.8019C14.6386 11.512 14.4722 11.2455 14.2617 11.0159C13.9952 10.7239 13.6645 10.498 13.2957 10.3559C13.105 10.2801 12.9054 10.2294 12.7017 10.2049C12.5127 10.1839 12.3217 10.1829 12.1307 10.1729H10.5397L10.5347 10.1769Z"
									fill="#2C6A06"
								/>
								<path
									d="M12.1248 10.172C12.1172 10.1968 12.1122 10.2222 12.1097 10.248C12.1097 11.9147 12.1097 13.5813 12.1097 15.248C12.1097 15.294 12.1247 15.314 12.1707 15.311C12.1937 15.311 12.2167 15.311 12.2397 15.311C12.2317 15.322 12.2258 15.336 12.2148 15.342C12.2038 15.348 12.1907 15.342 12.1777 15.342H9.77774C9.75774 15.342 9.71975 15.364 9.71875 15.315C9.84775 15.306 9.84775 15.306 9.84775 15.172C9.84775 13.53 9.84775 11.8883 9.84775 10.247C9.84775 10.222 9.84775 10.198 9.84775 10.173C9.95575 10.173 10.0637 10.173 10.1707 10.173C10.2777 10.173 10.4107 10.173 10.5317 10.173C10.5317 10.198 10.5258 10.222 10.5258 10.247C10.5258 11.9137 10.5258 13.5803 10.5258 15.247C10.5258 15.294 10.5398 15.308 10.5868 15.308C10.8454 15.308 11.1041 15.308 11.3628 15.308C11.4148 15.308 11.4287 15.29 11.4287 15.24C11.4287 13.5793 11.4287 11.9183 11.4287 10.257C11.427 10.2271 11.4233 10.1974 11.4178 10.168L12.1248 10.172Z"
									fill="#7AB60B"
								/>
							</svg>
						);
				}
			})()}
		</>
	);
}
