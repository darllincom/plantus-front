import { IconsProps } from './icons-props';

export default function File({ size }: IconsProps) {
	return (
		<>
			{(() => {
				switch (size) {
					case 'sm':
						return (
							<svg
								width="14"
								height="16"
								viewBox="0 0 14 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.6055 16H11.4555C11.4385 15.995 11.4211 15.9916 11.4035 15.99H2.47347C2.45584 15.9915 2.43842 15.9949 2.42147 16H2.35148C2.33948 15.99 2.32948 15.973 2.31548 15.97C2.25448 15.955 2.19248 15.944 2.13148 15.931C1.9385 15.8868 1.75628 15.8045 1.59547 15.689C1.41284 15.5633 1.25601 15.4038 1.13347 15.219C1.04382 15.083 0.974113 14.9348 0.926476 14.779C0.872659 14.5936 0.84803 14.401 0.853476 14.208C0.853476 14 0.853476 13.792 0.853476 13.584C0.853476 13.539 0.840475 13.52 0.793475 13.522C0.740214 13.5259 0.686735 13.5259 0.633475 13.522C0.464618 13.5095 0.306562 13.4343 0.190476 13.311C0.126223 13.2413 0.0764352 13.1595 0.0439934 13.0704C0.0115517 12.9813 -0.00290034 12.8867 0.00147482 12.792C0.00147482 11.45 0.00147482 10.1077 0.00147482 8.765C-0.00781288 8.61339 0.0269141 8.46233 0.101475 8.33C0.162406 8.23031 0.24732 8.14747 0.348475 8.089C0.480633 8.0173 0.630471 7.98469 0.780474 7.995C0.852474 7.995 0.852475 7.995 0.852475 7.923C0.852475 5.88434 0.852475 3.846 0.852475 1.808C0.847792 1.58324 0.881614 1.35935 0.952475 1.146C1.02641 0.93013 1.14383 0.731709 1.29747 0.563004C1.48049 0.357288 1.71225 0.200833 1.97148 0.108002C2.07148 0.0730017 2.17148 0.0559993 2.27848 0.0289993C2.30401 0.0207778 2.32905 0.0110958 2.35348 0H9.01348C9.02609 0.0223634 9.04082 0.0434643 9.05747 0.0630035L12.8405 3.837C12.8885 3.885 12.9405 3.937 12.9855 3.981C12.9995 3.99132 13.0146 4.00004 13.0305 4.007V14.45C13.0235 14.459 13.0105 14.468 13.0095 14.478C12.999 14.6122 12.9683 14.744 12.9185 14.869C12.8715 15.0054 12.8059 15.1346 12.7235 15.253C12.4657 15.625 12.0728 15.8816 11.6285 15.968C11.6225 15.971 11.6135 15.99 11.6055 16ZM6.93448 14.95H11.1865C11.2525 14.95 11.3195 14.95 11.3865 14.94C11.4982 14.9319 11.6053 14.8924 11.6955 14.826C11.7862 14.7618 11.8594 14.6759 11.9085 14.5762C11.9575 14.4765 11.9809 14.366 11.9765 14.255C11.9765 13.3883 11.9735 12.5217 11.9675 11.655C11.9635 10.455 11.9601 9.255 11.9575 8.055C11.9575 6.96233 11.9541 5.87 11.9475 4.778C11.9475 4.686 11.9475 4.595 11.9475 4.503C11.9475 4.434 11.9475 4.432 11.8775 4.433C11.4985 4.433 11.1185 4.441 10.7395 4.441C10.3905 4.441 10.0395 4.434 9.69147 4.433C9.56158 4.43205 9.43314 4.40555 9.31347 4.355C9.08903 4.26301 8.89862 4.1037 8.76847 3.899C8.68993 3.77698 8.63498 3.64129 8.60647 3.499C8.5894 3.40735 8.5817 3.31421 8.58348 3.221C8.58348 2.51967 8.58348 1.81967 8.58348 1.121C8.58348 1.042 8.58347 1.042 8.50247 1.042H2.74248C2.65948 1.042 2.57648 1.042 2.49348 1.052C2.39133 1.05959 2.29253 1.09174 2.20548 1.14571C2.11842 1.19969 2.0457 1.27388 1.99348 1.362C1.92267 1.4794 1.8879 1.61501 1.89348 1.752C1.89348 3.79867 1.89348 5.84566 1.89348 7.893C1.89348 8.006 1.88247 7.993 1.99847 7.993H10.0315C10.1526 7.98937 10.2725 8.01722 10.3796 8.07384C10.4867 8.13045 10.5773 8.2139 10.6425 8.316C10.7242 8.45058 10.7633 8.60678 10.7545 8.764C10.7545 10.09 10.7545 11.4157 10.7545 12.741C10.7618 12.8877 10.7308 13.0339 10.6645 13.165C10.6078 13.269 10.5251 13.3565 10.4245 13.419C10.3031 13.489 10.1645 13.5237 10.0245 13.519C7.35181 13.519 4.67914 13.519 2.00648 13.519H1.95647C1.91747 13.519 1.89747 13.534 1.89847 13.575C1.89847 13.836 1.89848 14.098 1.91048 14.358C1.91743 14.4557 1.94788 14.5503 1.99925 14.6337C2.05061 14.7171 2.12136 14.7868 2.20548 14.837C2.32701 14.9145 2.4695 14.9525 2.61347 14.946L6.93448 14.95ZM4.93448 12.298C5.1755 12.2957 5.41595 12.274 5.65348 12.233C5.7059 12.2259 5.75771 12.2149 5.80848 12.2C5.94783 12.1553 6.08194 12.0956 6.20848 12.022C6.46517 11.8615 6.6541 11.6124 6.73948 11.322C6.77308 11.2007 6.79485 11.0765 6.80447 10.951C6.83347 10.7298 6.81783 10.505 6.75847 10.29C6.70769 10.1054 6.61023 9.937 6.47548 9.801C6.3517 9.68063 6.20518 9.58613 6.04448 9.523C5.89302 9.46455 5.73475 9.42556 5.57348 9.407C5.50348 9.397 5.43148 9.395 5.36048 9.391C5.26048 9.391 5.16747 9.38 5.07147 9.381C4.97547 9.382 4.90247 9.391 4.81847 9.398C4.66447 9.41 4.51148 9.426 4.35748 9.435C4.30648 9.435 4.29948 9.459 4.29948 9.503C4.29948 10.397 4.29948 11.291 4.29948 12.185C4.29948 12.195 4.29948 12.205 4.29948 12.215C4.29948 12.246 4.31348 12.259 4.34448 12.261L4.93448 12.298ZM1.78947 10.849V12.197C1.78947 12.277 1.78948 12.28 1.87448 12.28H2.36848C2.44048 12.28 2.44548 12.275 2.44548 12.204V11.315C2.44548 11.25 2.44547 11.249 2.50847 11.251C2.57296 11.257 2.63773 11.2594 2.70248 11.258C2.82948 11.247 2.95647 11.23 3.08147 11.21C3.21712 11.185 3.34636 11.133 3.46148 11.057C3.61906 10.9641 3.73877 10.8186 3.79948 10.646C3.82667 10.5542 3.84574 10.4602 3.85647 10.365C3.88226 10.1994 3.85569 10.0298 3.78047 9.88C3.72331 9.76507 3.64091 9.66454 3.53944 9.58593C3.43797 9.50731 3.32004 9.45265 3.19448 9.426C3.05475 9.3877 2.91034 9.36918 2.76547 9.371C2.67447 9.371 2.58248 9.371 2.49248 9.371C2.28248 9.384 2.07247 9.401 1.86247 9.42C1.78947 9.426 1.78947 9.43 1.78947 9.502C1.79214 9.952 1.79381 10.401 1.79448 10.849H1.78947ZM7.25547 10.837C7.25547 11.295 7.25547 11.753 7.25547 12.211C7.25547 12.254 7.26348 12.281 7.31548 12.281C7.49848 12.281 7.68148 12.281 7.86448 12.281C7.91248 12.281 7.92547 12.265 7.92247 12.216C7.91947 12.167 7.91547 12.137 7.91547 12.097C7.91547 11.797 7.91547 11.497 7.91547 11.197C7.91547 11.122 7.91548 11.122 7.99048 11.122H8.87947C8.95047 11.122 8.95448 11.122 8.95448 11.05V10.66C8.95448 10.584 8.95447 10.584 8.88047 10.584H7.98648C7.91648 10.584 7.91547 10.584 7.91547 10.515V10.005C7.91547 9.933 7.91547 9.932 7.98747 9.932H8.96148C9.02648 9.932 9.03347 9.925 9.03347 9.86C9.03347 9.72667 9.03347 9.595 9.03347 9.465C9.03347 9.394 9.03347 9.393 8.96047 9.393H7.33947C7.26547 9.393 7.26048 9.398 7.26048 9.472C7.26048 9.928 7.26014 10.3833 7.25947 10.838L7.25547 10.837Z"
									fill="#78B607"
								/>
								<path
									d="M6.13842 10.7999C6.14811 10.9481 6.1263 11.0967 6.07442 11.2359C6.00967 11.4304 5.87151 11.5918 5.68941 11.6859C5.51936 11.7668 5.33267 11.8065 5.14442 11.8019C5.09116 11.8028 5.03794 11.7988 4.98542 11.7899C4.96842 11.7899 4.95241 11.7639 4.94141 11.7469C4.93041 11.7299 4.94141 11.7209 4.94141 11.7079C4.94141 11.1279 4.94141 10.5489 4.94141 9.96891C4.94141 9.91791 4.95241 9.89391 5.00641 9.88691C5.26547 9.8388 5.53318 9.8793 5.76641 10.0019C5.88934 10.0736 5.98714 10.1815 6.04642 10.3109C6.11731 10.4637 6.14893 10.6318 6.13842 10.7999V10.7999Z"
									fill="#78B607"
								/>
								<path
									d="M2.44336 10.3204V9.97044C2.44336 9.89044 2.45536 9.87043 2.53436 9.87043C2.64025 9.8635 2.74648 9.8635 2.85236 9.87043C2.92023 9.87476 2.98587 9.89631 3.04308 9.93306C3.1003 9.9698 3.1472 10.0205 3.17936 10.0804C3.22992 10.1756 3.24175 10.2867 3.21236 10.3904C3.19414 10.4636 3.16 10.5319 3.11237 10.5904C3.06582 10.6415 3.00893 10.6821 2.94548 10.7095C2.88203 10.737 2.81347 10.7506 2.74436 10.7494C2.65836 10.7494 2.57136 10.7434 2.48536 10.7414C2.44736 10.7414 2.44336 10.7184 2.44336 10.6884C2.44336 10.5664 2.44336 10.4434 2.44336 10.3204Z"
									fill="#78B607"
								/>
							</svg>
						);

					default:
						return (
							<svg
								width="27"
								height="32"
								viewBox="0 0 27 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M23.2149 32H22.9149C22.8809 31.9899 22.8461 31.9832 22.8109 31.98H4.95086C4.9156 31.9831 4.88074 31.9898 4.84686 32H4.70686C4.68286 31.98 4.66286 31.946 4.63486 31.94C4.51286 31.91 4.38886 31.888 4.26686 31.862C3.8809 31.7735 3.51646 31.609 3.19486 31.378C2.8296 31.1266 2.51593 30.8075 2.27086 30.438C2.09155 30.1659 1.95213 29.8696 1.85686 29.558C1.74922 29.1872 1.69997 28.8019 1.71086 28.416C1.71086 28 1.71086 27.584 1.71086 27.168C1.71086 27.078 1.68486 27.04 1.59086 27.044C1.48433 27.0519 1.37738 27.0519 1.27086 27.044C0.933143 27.0191 0.61703 26.8685 0.384858 26.622C0.256353 26.4826 0.156777 26.319 0.0918931 26.1409C0.0270096 25.9627 -0.00189443 25.7734 0.00685589 25.584C0.00685589 22.9 0.00685589 20.2153 0.00685589 17.53C-0.0117195 17.2268 0.0577345 16.9247 0.206857 16.66C0.328719 16.4606 0.498546 16.2949 0.700856 16.178C0.965172 16.0346 1.26485 15.9694 1.56485 15.99C1.70885 15.99 1.70886 15.99 1.70886 15.846C1.70886 11.7687 1.70886 7.692 1.70886 3.616C1.69949 3.16649 1.76713 2.7187 1.90886 2.29201C2.05673 1.86026 2.29157 1.46342 2.59886 1.12601C2.96489 0.714575 3.42841 0.401666 3.94686 0.216003C4.14686 0.146003 4.34686 0.111999 4.56086 0.0579987C4.61193 0.0415555 4.66201 0.0221916 4.71086 0H18.0309C18.0561 0.0447268 18.0855 0.0869285 18.1189 0.126007L25.6849 7.674C25.7809 7.77 25.8849 7.87401 25.9749 7.96201C26.0028 7.98264 26.033 8.00008 26.0649 8.01401V28.9C26.0509 28.918 26.0249 28.936 26.0229 28.956C26.0018 29.2243 25.9405 29.488 25.8409 29.738C25.747 30.0108 25.6157 30.2692 25.4509 30.506C24.9353 31.2501 24.1494 31.7632 23.2609 31.936C23.2489 31.942 23.2309 31.98 23.2149 32ZM13.8729 29.9H22.3769C22.5089 29.9 22.6429 29.9 22.7769 29.88C23.0003 29.8639 23.2145 29.7848 23.3949 29.652C23.5763 29.5235 23.7227 29.3518 23.8208 29.1523C23.919 28.9529 23.9657 28.7321 23.9569 28.51C23.9569 26.7767 23.9509 25.0433 23.9389 23.31C23.9309 20.91 23.9242 18.51 23.9189 16.11C23.9189 13.9247 23.9122 11.74 23.8989 9.556C23.8989 9.372 23.8989 9.19 23.8989 9.006C23.8989 8.868 23.8989 8.864 23.7589 8.866C23.0009 8.866 22.2409 8.882 21.4829 8.882C20.7849 8.882 20.0829 8.868 19.3869 8.866C19.1271 8.8641 18.8702 8.8111 18.6309 8.71001C18.182 8.52602 17.8012 8.20739 17.5409 7.798C17.3838 7.55395 17.2739 7.28259 17.2169 6.998C17.1827 6.81471 17.1673 6.62841 17.1709 6.442C17.1709 5.03933 17.1709 3.63934 17.1709 2.242C17.1709 2.084 17.1709 2.084 17.0089 2.084H5.48886C5.32286 2.084 5.15686 2.084 4.99086 2.104C4.78657 2.11919 4.58897 2.18348 4.41486 2.29143C4.24076 2.39937 4.0953 2.54777 3.99086 2.724C3.84924 2.9588 3.7797 3.23002 3.79086 3.504C3.79086 7.59733 3.79086 11.6913 3.79086 15.786C3.79086 16.012 3.76886 15.986 4.00086 15.986H20.0669C20.309 15.9787 20.5489 16.0344 20.7631 16.1477C20.9773 16.2609 21.1585 16.4278 21.2889 16.632C21.4524 16.9012 21.5305 17.2136 21.5129 17.528C21.5129 20.18 21.5129 22.8313 21.5129 25.482C21.5275 25.7755 21.4655 26.0678 21.3329 26.33C21.2195 26.538 21.0541 26.713 20.8529 26.838C20.6101 26.9781 20.333 27.0474 20.0529 27.038C14.7075 27.038 9.36219 27.038 4.01686 27.038H3.91686C3.83886 27.038 3.79885 27.068 3.80085 27.15C3.80085 27.672 3.80086 28.196 3.82486 28.716C3.83876 28.9114 3.89967 29.1006 4.0024 29.2673C4.10512 29.4341 4.24662 29.5736 4.41486 29.674C4.65793 29.8289 4.9429 29.9051 5.23085 29.892L13.8729 29.9ZM9.87286 24.596C10.3549 24.5914 10.8358 24.548 11.3109 24.466C11.4157 24.4518 11.5193 24.4298 11.6209 24.4C11.8996 24.3105 12.1678 24.1911 12.4209 24.044C12.9342 23.723 13.3121 23.2249 13.4829 22.644C13.5501 22.4014 13.5936 22.153 13.6129 21.902C13.6708 21.4596 13.6396 21.0101 13.5209 20.58C13.4193 20.2108 13.2244 19.874 12.9549 19.602C12.7073 19.3613 12.4143 19.1723 12.0929 19.046C11.7899 18.9291 11.4734 18.8511 11.1509 18.814C11.0109 18.794 10.8669 18.79 10.7249 18.782C10.5249 18.782 10.3389 18.76 10.1469 18.762C9.95485 18.764 9.80886 18.782 9.64085 18.796C9.33286 18.82 9.02686 18.852 8.71886 18.87C8.61686 18.87 8.60286 18.918 8.60286 19.006C8.60286 20.794 8.60286 22.582 8.60286 24.37C8.60286 24.39 8.60286 24.41 8.60286 24.43C8.60286 24.492 8.63086 24.518 8.69286 24.522L9.87286 24.596ZM3.58286 21.698V24.394C3.58286 24.554 3.58286 24.56 3.75286 24.56H4.74086C4.88486 24.56 4.89486 24.55 4.89486 24.408V22.63C4.89486 22.5 4.89486 22.498 5.02086 22.502C5.14982 22.514 5.27936 22.5187 5.40886 22.516C5.66286 22.494 5.91686 22.46 6.16686 22.42C6.43815 22.37 6.69662 22.266 6.92686 22.114C7.24203 21.9282 7.48145 21.6371 7.60286 21.292C7.65724 21.1084 7.69539 20.9203 7.71686 20.73C7.76842 20.3987 7.71528 20.0596 7.56485 19.76C7.45052 19.5301 7.28573 19.3291 7.08278 19.1719C6.87984 19.0146 6.64399 18.9053 6.39286 18.852C6.11341 18.7754 5.82459 18.7384 5.53486 18.742C5.35286 18.742 5.16886 18.742 4.98886 18.742C4.56886 18.768 4.14886 18.802 3.72886 18.84C3.58286 18.852 3.58286 18.86 3.58286 19.004C3.58819 19.904 3.59153 20.802 3.59286 21.698H3.58286ZM14.5149 21.674C14.5149 22.59 14.5149 23.506 14.5149 24.422C14.5149 24.508 14.5309 24.562 14.6349 24.562C15.0009 24.562 15.3669 24.562 15.7329 24.562C15.8289 24.562 15.8549 24.53 15.8489 24.432C15.8429 24.334 15.8349 24.274 15.8349 24.194C15.8349 23.594 15.8349 22.994 15.8349 22.394C15.8349 22.244 15.8349 22.244 15.9849 22.244H17.7629C17.9049 22.244 17.9129 22.244 17.9129 22.1V21.32C17.9129 21.168 17.9129 21.168 17.7649 21.168H15.9769C15.8369 21.168 15.8349 21.168 15.8349 21.03V20.01C15.8349 19.866 15.8349 19.864 15.9789 19.864H17.9269C18.0569 19.864 18.0709 19.85 18.0709 19.72C18.0709 19.4533 18.0709 19.19 18.0709 18.93C18.0709 18.788 18.0709 18.786 17.9249 18.786H14.6829C14.5349 18.786 14.5249 18.796 14.5249 18.944C14.5249 19.856 14.5242 20.7667 14.5229 21.676L14.5149 21.674Z"
									fill="#78B607"
								/>
								<path
									d="M12.2807 21.5979C12.3001 21.8943 12.2565 22.1915 12.1528 22.4699C12.0232 22.8588 11.7469 23.1817 11.3827 23.3698C11.0426 23.5316 10.6692 23.6111 10.2927 23.6018C10.1862 23.6036 10.0798 23.5956 9.97474 23.5778C9.94074 23.5778 9.90873 23.5258 9.88673 23.4918C9.86473 23.4578 9.88673 23.4398 9.88673 23.4138C9.88673 22.2538 9.88673 21.0959 9.88673 19.9359C9.88673 19.8339 9.90874 19.7859 10.0167 19.7719C10.5349 19.6756 11.0703 19.7566 11.5367 20.0019C11.7826 20.1453 11.9782 20.3611 12.0968 20.6198C12.2385 20.9254 12.3018 21.2616 12.2807 21.5979Z"
									fill="#78B607"
								/>
								<path
									d="M4.89062 20.6428V19.9428C4.89062 19.7828 4.91463 19.7428 5.07263 19.7428C5.28441 19.729 5.49686 19.729 5.70863 19.7428C5.84436 19.7515 5.97564 19.7946 6.09007 19.8681C6.20451 19.9416 6.2983 20.043 6.36263 20.1628C6.46375 20.3532 6.48741 20.5754 6.42863 20.7828C6.39219 20.9292 6.32391 21.0658 6.22864 21.1828C6.13555 21.285 6.02177 21.3662 5.89487 21.421C5.76797 21.4759 5.63085 21.5031 5.49263 21.5008C5.32063 21.5008 5.14662 21.4888 4.97462 21.4848C4.89862 21.4848 4.89062 21.4388 4.89062 21.3788C4.89062 21.1348 4.89062 20.8888 4.89062 20.6428Z"
									fill="#78B607"
								/>
							</svg>
						);
				}
			})()}
		</>
	);
}