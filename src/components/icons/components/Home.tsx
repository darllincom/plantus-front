import { IconsProps } from './icons-props';

export default function Home({ size }: IconsProps) {
	return (
		<>
			{(() => {
				switch (size) {
					case 'lg':
						return (
							<svg
								width="32"
								height="31"
								viewBox="0 0 32 31"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M27.9042 30.062C27.8913 30.062 27.8803 30.0455 27.8675 30.0455C27.7757 30.0455 27.6839 30.062 27.5921 30.062C19.8545 30.062 12.1169 30.062 4.37925 30.062C4.1213 30.0479 3.86474 30.0142 3.61192 29.961C3.47277 29.9407 3.33533 29.91 3.20075 29.8693C3.0489 29.8161 2.90004 29.7548 2.75473 29.6857C2.60669 29.6285 2.46364 29.5591 2.32704 29.4783C2.06455 29.3076 1.80757 29.1258 1.55976 28.9276C1.27917 28.7074 1.03671 28.4426 0.842062 28.1438C0.678261 27.8963 0.532257 27.6374 0.405178 27.3692C0.301722 27.1392 0.217618 26.9009 0.153714 26.657C0.106769 26.4714 0.0748449 26.2823 0.05826 26.0916C-0.00236426 25.245 -0.0164772 24.3957 0.0160226 23.5475C0.00990395 19.5667 0.00990395 15.5853 0.0160226 11.6032C0.0298388 11.3526 0.0629515 11.1035 0.115118 10.858C0.137145 10.7185 0.173878 10.5809 0.205083 10.445C0.205083 10.4193 0.234475 10.3954 0.239982 10.3697C0.242898 10.3312 0.242898 10.2926 0.239982 10.2541V10.2137C0.296885 10.1862 0.335387 10.1513 0.29684 10.0834V10.043C0.320703 10.0228 0.353789 10.0081 0.366638 9.98242C0.414364 9.89064 0.458401 9.79888 0.498784 9.69976C0.539167 9.60064 0.555669 9.55106 0.583203 9.4758C0.582345 9.47377 0.581915 9.47162 0.581915 9.46941C0.581915 9.46721 0.582345 9.465 0.583203 9.46297L0.662132 9.34735C0.661274 9.34532 0.660844 9.34311 0.660844 9.34091C0.660844 9.3387 0.661274 9.3365 0.662132 9.33447L0.764925 9.17661L0.790637 9.14176L0.829177 9.09034C0.828319 9.08831 0.827889 9.0861 0.827889 9.0839C0.827889 9.08169 0.828319 9.07955 0.829177 9.07751L0.953985 8.91965L1.00171 8.86274L1.08983 8.75625L1.19447 8.64797L1.38902 8.45521L1.47714 8.37079L1.60564 8.26436L1.73415 8.15602C1.73618 8.15516 1.73838 8.15473 1.74059 8.15473C1.74279 8.15473 1.74494 8.15516 1.74697 8.15602L1.79655 8.11748L1.83145 8.09177L1.88282 8.05507L1.93603 8.02387C2.03148 7.97431 2.13063 7.92657 2.22425 7.8715C2.26348 7.84274 2.29974 7.81014 2.33253 7.7742C2.33453 7.77323 2.33674 7.77274 2.33897 7.77274C2.3412 7.77274 2.34341 7.77323 2.34541 7.7742L2.44087 7.71549C2.4429 7.71464 2.44505 7.71421 2.44725 7.71421C2.44946 7.71421 2.45166 7.71464 2.45369 7.71549C2.5106 7.71549 2.57669 7.71548 2.58954 7.63472H2.62259C2.72538 7.58516 2.82998 7.53926 2.92727 7.4842C2.99591 7.44077 3.06209 7.3936 3.12552 7.34286C3.12755 7.34201 3.12975 7.34157 3.13196 7.34157C3.13417 7.34157 3.13631 7.34201 3.13834 7.34286C3.27378 7.31017 3.39648 7.23796 3.49081 7.13543C3.49284 7.13457 3.49499 7.13414 3.49719 7.13414C3.4994 7.13414 3.5016 7.13457 3.50364 7.13543C3.56054 7.13543 3.62847 7.13542 3.63948 7.05465H3.67253L3.74776 6.99959L3.77896 6.99046C3.85372 6.9597 3.92613 6.92347 3.99559 6.88212C4.03829 6.85212 4.07766 6.81767 4.11305 6.77932L4.14426 6.77014C4.16426 6.774 4.18486 6.774 4.20487 6.77014C4.33887 6.69488 4.47283 6.61966 4.60315 6.5389C4.64279 6.50993 4.67965 6.47734 4.71329 6.44159H4.74449L4.81978 6.38653H4.85098C4.91683 6.36362 4.98122 6.33664 5.04374 6.30575C5.08637 6.27567 5.12573 6.24122 5.1612 6.20296C5.16535 6.20141 5.16989 6.20141 5.17403 6.20296L5.50263 6.01939C5.58707 5.98084 5.67518 5.94781 5.75595 5.90192C5.79672 5.87368 5.83422 5.84104 5.86787 5.80461H5.89907C5.94113 5.80641 5.98282 5.79594 6.01901 5.77442C6.05519 5.7529 6.08435 5.72131 6.10286 5.6835C6.10487 5.68253 6.10702 5.68199 6.10925 5.68199C6.11148 5.68199 6.11369 5.68253 6.11569 5.6835L6.21115 5.62474C6.21318 5.62388 6.21538 5.62345 6.21759 5.62345C6.2198 5.62345 6.22194 5.62388 6.22397 5.62474C6.28088 5.62474 6.34697 5.62473 6.35982 5.54396H6.39287C6.49566 5.4944 6.60026 5.44851 6.69755 5.39344C6.76622 5.35008 6.83241 5.3029 6.8958 5.25211C6.89783 5.25125 6.90003 5.25082 6.90224 5.25082C6.90445 5.25082 6.90665 5.25125 6.90868 5.25211C7.04399 5.21911 7.16655 5.14695 7.26109 5.04468C7.26312 5.04382 7.26532 5.04339 7.26753 5.04339C7.26974 5.04339 7.27194 5.04382 7.27397 5.04468C7.33088 5.04468 7.39875 5.04472 7.40976 4.96395H7.44281L7.5181 4.90889L7.5493 4.8997C7.61522 4.87625 7.67956 4.84864 7.742 4.81708C7.7847 4.78708 7.82413 4.75262 7.85953 4.71428L7.89073 4.7051C7.91073 4.70901 7.93128 4.70901 7.95128 4.7051C8.08528 4.62984 8.2193 4.55462 8.34963 4.47385C8.38924 4.44486 8.4261 4.41228 8.45976 4.37655H8.49096L8.56619 4.32149H8.59739C8.66014 4.29826 8.72145 4.27128 8.78096 4.24071C8.82356 4.21059 8.86292 4.17614 8.89843 4.13792C8.90258 4.13637 8.90717 4.13637 8.91132 4.13792L9.23986 3.95434C9.3243 3.9158 9.41241 3.88277 9.49317 3.83688C9.53397 3.80868 9.57154 3.77603 9.60515 3.73957H9.63636C9.67842 3.74136 9.7201 3.73089 9.75629 3.70938C9.79248 3.68786 9.82158 3.65627 9.84009 3.61846C9.8421 3.61749 9.84431 3.61695 9.84654 3.61695C9.84876 3.61695 9.85098 3.61749 9.85298 3.61846L9.94843 3.5597C9.95047 3.55884 9.95261 3.55841 9.95482 3.55841C9.95702 3.55841 9.95923 3.55884 9.96126 3.5597C10.0182 3.5597 10.0843 3.55969 10.0971 3.47892H10.1302C10.2678 3.40733 10.4073 3.33941 10.5431 3.26415C10.5839 3.23587 10.6214 3.20329 10.6551 3.1669L10.6863 3.15772L10.9965 2.97414C10.9985 2.97317 11.0007 2.97269 11.003 2.97269C11.0052 2.97269 11.0074 2.97317 11.0094 2.97414C11.0583 2.97024 11.1056 2.95536 11.1479 2.93056C11.1902 2.90577 11.2263 2.8717 11.2535 2.83096L11.2847 2.82178C11.3507 2.79835 11.415 2.77079 11.4774 2.73921C11.5201 2.70921 11.5596 2.67475 11.595 2.63641L11.6262 2.62723C11.6462 2.63109 11.6667 2.63109 11.6867 2.62723C11.8207 2.55197 11.9547 2.47669 12.0851 2.39593C12.1247 2.36692 12.1615 2.3344 12.1952 2.29868H12.2264L12.3016 2.24356H12.3328C12.3956 2.22027 12.4569 2.19335 12.5164 2.16284C12.559 2.13271 12.5984 2.09826 12.6339 2.06005C12.638 2.0585 12.6426 2.0585 12.6468 2.06005L12.9753 1.87648C13.0597 1.83793 13.1478 1.8049 13.2286 1.75901C13.2694 1.73077 13.3069 1.69813 13.3406 1.6617H13.3718C13.4139 1.6635 13.4555 1.65297 13.4917 1.63145C13.5279 1.60994 13.557 1.57835 13.5755 1.54054C13.5775 1.53956 13.5797 1.53908 13.582 1.53908C13.5842 1.53908 13.5864 1.53956 13.5884 1.54054L13.6839 1.48183H13.6985C13.7793 1.45062 13.8619 1.41942 13.9427 1.38638C14.1262 1.30561 14.3226 1.21379 14.519 1.14404C14.728 1.06993 14.9413 1.00867 15.1578 0.960528C15.3385 0.918923 15.5231 0.89613 15.7085 0.892578C15.9747 0.892578 16.2408 0.909091 16.507 0.931118C16.7108 0.949474 16.9127 0.984358 17.1146 1.01923C17.204 1.03703 17.2918 1.06224 17.3771 1.09452C17.7484 1.21899 18.1043 1.38524 18.438 1.59011C18.4637 1.60072 18.491 1.60694 18.5188 1.60849L18.5518 1.61767L18.6289 1.67089H18.6602C18.6886 1.71395 18.7266 1.74989 18.7711 1.77598C18.8157 1.80207 18.8656 1.81763 18.9171 1.82141L19.2457 2.00498C19.2477 2.00412 19.2499 2.00364 19.2521 2.00364C19.2543 2.00364 19.2565 2.00412 19.2585 2.00498C19.2902 2.03852 19.3253 2.06863 19.3632 2.09489C19.466 2.15179 19.5724 2.20135 19.677 2.25275H19.7083C19.7238 2.27697 19.743 2.29865 19.7652 2.317C19.8606 2.3739 19.9487 2.4308 20.0552 2.4822C20.1616 2.53359 20.2039 2.55196 20.2773 2.58684L20.3085 2.59602C20.3859 2.69317 20.4963 2.75851 20.6187 2.77959L20.6499 2.78878L20.7252 2.84385H20.7564C20.7828 2.8855 20.8187 2.92032 20.8611 2.94552C20.9035 2.97071 20.9513 2.98554 21.0005 2.98882C21.0025 2.98785 21.0047 2.98737 21.0069 2.98737C21.0091 2.98737 21.0114 2.98785 21.0134 2.98882L21.3236 3.17239L21.3548 3.18158C21.3863 3.21524 21.4214 3.24542 21.4594 3.27154C21.5622 3.32845 21.6687 3.37801 21.7733 3.4294H21.8063C21.8192 3.512 21.8853 3.50279 21.9422 3.51197C21.9442 3.51111 21.9464 3.51068 21.9486 3.51068C21.9508 3.51068 21.953 3.51111 21.955 3.51197L22.2652 3.69554L22.2964 3.70473L22.3735 3.75795H22.4047C22.4332 3.80101 22.4712 3.83694 22.5158 3.86304C22.5603 3.88913 22.6102 3.90469 22.6617 3.90847L22.9903 4.09204C22.9923 4.09118 22.9945 4.09075 22.9967 4.09075C22.9989 4.09075 23.0011 4.09118 23.0032 4.09204C23.0348 4.12561 23.0698 4.15572 23.1077 4.18195C23.2105 4.23885 23.317 4.28846 23.4217 4.33986H23.4529C23.4684 4.36406 23.4876 4.38568 23.5098 4.40406C23.6052 4.46096 23.6933 4.51791 23.7998 4.56931C23.9063 4.62071 23.9466 4.63902 24.0219 4.67389L24.0531 4.68308C24.1307 4.77997 24.241 4.84524 24.3633 4.86665L24.3945 4.87584L24.4698 4.92905H24.501C24.5167 4.95311 24.5359 4.97476 24.5579 4.99331C24.6552 5.05205 24.7525 5.10897 24.8516 5.1622C24.9213 5.19891 24.9948 5.2301 25.0682 5.26315H25.0994C25.1324 5.29957 25.1693 5.33221 25.2095 5.36045C25.3087 5.41552 25.4133 5.46141 25.5161 5.51097H25.5491C25.562 5.59357 25.6281 5.58435 25.685 5.59169C25.687 5.59083 25.6891 5.5904 25.6913 5.5904C25.6936 5.5904 25.6958 5.59083 25.6978 5.59169L26.008 5.77526L26.0392 5.78445L26.1145 5.83766H26.1457C26.1741 5.88073 26.2121 5.91672 26.2567 5.94281C26.3012 5.9689 26.3512 5.98441 26.4027 5.98818L26.7312 6.17175C26.7332 6.1709 26.7354 6.17047 26.7376 6.17047C26.7399 6.17047 26.7421 6.1709 26.7441 6.17175C26.7756 6.2054 26.8107 6.23558 26.8487 6.26172C26.9515 6.31862 27.058 6.36818 27.1626 6.41958H27.1938C27.2102 6.44369 27.23 6.46534 27.2526 6.48383C27.3462 6.54073 27.4361 6.59578 27.5389 6.64718C27.6417 6.69857 27.6894 6.71874 27.7647 6.75361L27.7959 6.7628C27.8735 6.85968 27.9838 6.92496 28.1061 6.94637L28.1373 6.95556L28.2125 7.00877H28.2437C28.2595 7.03283 28.2787 7.05447 28.3007 7.07303C28.3979 7.13176 28.4952 7.18869 28.5944 7.24192C28.6641 7.27863 28.7376 7.30982 28.811 7.34286H28.8422C28.8757 7.37938 28.9133 7.41203 28.9541 7.44017C29.0532 7.49523 29.1579 7.54113 29.2607 7.59069H29.2937C29.3066 7.67329 29.3726 7.66407 29.4295 7.67141C29.4316 7.67055 29.4338 7.67012 29.436 7.67012C29.4382 7.67012 29.4404 7.67055 29.4424 7.67141C29.4424 7.68609 29.4553 7.7063 29.4681 7.71365C29.5783 7.7834 29.6865 7.855 29.7985 7.92108C29.8811 7.9688 29.9692 8.00552 30.0537 8.04774L30.1069 8.07709L30.1583 8.11563C30.1624 8.11408 30.167 8.11408 30.1711 8.11563L30.2427 8.17439C30.2448 8.17353 30.2469 8.1731 30.2491 8.1731C30.2513 8.1731 30.2535 8.17353 30.2556 8.17439L30.3272 8.23495L30.3841 8.28083L30.5126 8.38916L30.5346 8.41118L30.8558 8.73239L30.9035 8.78745L30.9862 8.88111L31.0339 8.93797L31.1568 9.09583C31.1578 9.09783 31.1583 9.10005 31.1583 9.10227C31.1583 9.1045 31.1578 9.10671 31.1568 9.10871L31.1954 9.16008L31.2211 9.19498L31.3239 9.35284L31.3477 9.38953L31.4065 9.48314C31.4074 9.48517 31.4078 9.48737 31.4078 9.48958C31.4078 9.49179 31.4074 9.49399 31.4065 9.49602C31.4104 9.52718 31.4171 9.55788 31.4267 9.58778C31.5368 9.84721 31.6482 10.106 31.7608 10.3642C31.7718 10.3899 31.803 10.4065 31.825 10.4266V10.467C31.825 10.4927 31.8048 10.5221 31.8121 10.5441C31.9527 11.0655 32.0146 11.6051 31.9957 12.1448C31.9957 16.5845 31.9957 21.0248 31.9957 25.4657C31.9957 25.6162 31.9957 25.7649 31.9957 25.9154C31.9865 25.9778 31.9792 26.042 31.9664 26.0989C31.9273 26.2412 31.8979 26.3859 31.8782 26.5321C31.8531 26.7218 31.8018 26.9072 31.7259 27.0828C31.6293 27.3346 31.5165 27.5799 31.3881 27.817C31.1553 28.25 30.8441 28.6359 30.4703 28.9551C30.166 29.2347 29.8182 29.4629 29.4406 29.6306C29.2368 29.7187 29.0331 29.8142 28.8257 29.8876C28.7216 29.9206 28.6155 29.947 28.5081 29.9665L28.4622 29.9831H28.4218L28.3759 30.0033L28.1648 30.0289L28.1189 30.0436H27.9941L27.906 30.0638L27.9042 30.062ZM2.10857 18.6648C2.10857 20.9397 2.10857 23.214 2.10857 25.4877C2.09635 25.9942 2.24482 26.4915 2.53262 26.9084C2.74858 27.2346 3.04285 27.5014 3.38852 27.6845C3.73419 27.8676 4.12025 27.9611 4.5114 27.9566C6.16343 27.9676 7.82466 27.9566 9.48219 27.9566C9.58132 27.9566 9.61069 27.929 9.60885 27.8281C9.60885 26.0934 9.60885 24.357 9.60885 22.6223C9.60905 22.2802 9.63355 21.9385 9.68223 21.5999C9.77413 20.9859 9.95989 20.3898 10.2329 19.8322C10.661 18.939 11.2891 18.1564 12.0685 17.5451C12.4909 17.212 12.9534 16.9332 13.4452 16.7154C14.0003 16.4711 14.5875 16.3079 15.189 16.2308C15.7164 16.1613 16.2502 16.157 16.7786 16.2179C17.3345 16.2817 17.8795 16.4187 18.3995 16.6254C18.9631 16.8486 19.4922 17.1509 19.9708 17.5231C20.5953 18.0073 21.1249 18.6029 21.5328 19.2797C21.8274 19.7645 22.0553 20.2869 22.2102 20.8326C22.3647 21.3487 22.4474 21.8836 22.4562 22.4222C22.4562 24.2248 22.4562 26.0292 22.4562 27.8317C22.4562 27.9199 22.4745 27.9584 22.5736 27.9584C24.244 27.9584 25.9162 27.9584 27.5866 27.9584C28.0614 27.9597 28.5245 27.8114 28.9101 27.5344C29.2398 27.3127 29.5084 27.0115 29.6909 26.6586C29.8735 26.3057 29.9641 25.9124 29.9545 25.5152C29.9545 20.9336 29.9545 16.3526 29.9545 11.7721C29.9541 11.4571 29.8917 11.1453 29.771 10.8543C29.5678 10.3503 29.1987 9.93064 28.7247 9.66486C28.2089 9.36749 27.6912 9.07564 27.1754 8.78011L25.45 7.79257L23.7704 6.83254L22.1753 5.91474L20.4774 4.94558L19.0309 4.11775L17.5459 3.27154C17.2232 3.06167 16.8668 2.90892 16.4923 2.81998C15.9345 2.70817 15.3551 2.79928 14.8586 3.07694C14.4401 3.30822 14.0289 3.55051 13.6159 3.7873L11.7987 4.82626L10.1099 5.78994L8.53314 6.68942L6.70858 7.73566L5.21627 8.58741C4.76839 8.84256 4.31868 9.09766 3.87263 9.35648C3.59191 9.50288 3.32087 9.66721 3.06126 9.84843C2.75654 10.0726 2.51046 10.3671 2.34396 10.7068C2.17745 11.0466 2.09546 11.4215 2.10493 11.7997C2.10615 14.0917 2.10735 16.3807 2.10857 18.6666V18.6648ZM16.0297 27.9621H20.1855C20.2626 27.9621 20.3232 27.9621 20.3232 27.8556C20.3232 26.0494 20.3232 24.2413 20.3232 22.4351C20.3226 22.1993 20.293 21.9644 20.235 21.7357C20.1514 21.4239 20.0491 21.1174 19.9285 20.818C19.7792 20.4626 19.5721 20.1345 19.3155 19.8469C18.8642 19.3097 18.2872 18.8923 17.6359 18.6317C17.186 18.4487 16.7078 18.345 16.2225 18.3252C15.6115 18.2997 15.0021 18.4068 14.4364 18.6391C14.0118 18.8076 13.6194 19.0479 13.2763 19.3495C13.0422 19.5525 12.8299 19.7795 12.6431 20.0268C12.4351 20.3065 12.2561 20.6066 12.1089 20.9226C11.8645 21.4798 11.7449 22.0837 11.7583 22.6921C11.7583 24.3918 11.7583 26.0916 11.7583 27.7914C11.7583 27.9621 11.7583 27.9621 11.9235 27.9621H16.0297Z"
									fill="#5B607A"
								/>
							</svg>
						);

					default:
						return (
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2023 15.891C15.1953 15.891 15.1893 15.882 15.1823 15.882C15.1323 15.882 15.0823 15.891 15.0323 15.891C10.8169 15.891 6.60161 15.891 2.38628 15.891C2.24574 15.8833 2.10598 15.865 1.96825 15.836C1.89244 15.8249 1.81757 15.8082 1.74425 15.786C1.66152 15.757 1.58043 15.7236 1.50127 15.686C1.42061 15.6548 1.34268 15.617 1.26826 15.573C1.12526 15.48 0.985264 15.381 0.850264 15.273C0.697402 15.1531 0.565315 15.0088 0.459273 14.846C0.370037 14.7112 0.290497 14.5701 0.221266 14.424C0.164905 14.2987 0.119086 14.1689 0.0842731 14.036C0.0586978 13.9349 0.0413063 13.8319 0.0322711 13.728C-0.000755996 13.2668 -0.00844447 12.8041 0.00926086 12.342C0.00592752 10.1733 0.00592752 8.00432 0.00926086 5.83499C0.0167877 5.69847 0.0348269 5.56276 0.0632465 5.42902C0.0752465 5.35302 0.0952577 5.27801 0.112258 5.20401C0.112258 5.19001 0.12827 5.17699 0.13127 5.16299C0.132859 5.14202 0.132859 5.12098 0.13127 5.10001V5.078C0.16227 5.063 0.183245 5.04402 0.162245 5.00702V4.98502C0.175245 4.97402 0.19327 4.966 0.20027 4.952C0.22627 4.902 0.250261 4.852 0.272261 4.798C0.294261 4.744 0.303251 4.71699 0.318251 4.67599C0.317784 4.67489 0.317549 4.67372 0.317549 4.67252C0.317549 4.67131 0.317784 4.67011 0.318251 4.66901L0.361251 4.60602C0.360783 4.60491 0.360549 4.60371 0.360549 4.60251C0.360549 4.60131 0.360783 4.60011 0.361251 4.599L0.41725 4.513L0.431258 4.49402L0.452254 4.466C0.451786 4.4649 0.451552 4.4637 0.451552 4.46249C0.451552 4.46129 0.451786 4.46012 0.452254 4.45901L0.520247 4.37302L0.546248 4.34201L0.594252 4.284L0.651259 4.22501L0.757247 4.12L0.805251 4.07401L0.875258 4.01602L0.945265 3.957C0.946373 3.95653 0.947573 3.9563 0.948775 3.9563C0.949977 3.9563 0.951146 3.95653 0.952254 3.957L0.979262 3.936L0.998275 3.922L1.02626 3.90201L1.05525 3.88501C1.10725 3.85801 1.16126 3.832 1.21226 3.802C1.23364 3.78633 1.25339 3.76857 1.27125 3.74899C1.27234 3.74846 1.27355 3.7482 1.27476 3.7482C1.27598 3.7482 1.27718 3.74846 1.27827 3.74899L1.33028 3.71701C1.33138 3.71654 1.33255 3.71631 1.33375 3.71631C1.33496 3.71631 1.33616 3.71654 1.33726 3.71701C1.36826 3.71701 1.40427 3.717 1.41127 3.673H1.42927C1.48527 3.646 1.54226 3.621 1.59526 3.591C1.63265 3.56735 1.66871 3.54165 1.70326 3.51401C1.70437 3.51354 1.70557 3.51331 1.70677 3.51331C1.70797 3.51331 1.70914 3.51354 1.71025 3.51401C1.78403 3.4962 1.85088 3.45686 1.90227 3.401C1.90337 3.40053 1.90454 3.4003 1.90575 3.4003C1.90695 3.4003 1.90815 3.40053 1.90925 3.401C1.94025 3.401 1.97726 3.40099 1.98326 3.35699H2.00127L2.04225 3.327L2.05925 3.32202C2.09997 3.30527 2.13942 3.28553 2.17726 3.263C2.20052 3.24666 2.22197 3.22789 2.24126 3.207L2.25825 3.202C2.26915 3.2041 2.28037 3.2041 2.29127 3.202C2.36427 3.161 2.43725 3.12002 2.50825 3.07602C2.52984 3.06024 2.54993 3.04249 2.56825 3.02301H2.58525L2.62627 2.99301H2.64326C2.67914 2.98053 2.71422 2.96583 2.74827 2.94901C2.7715 2.93262 2.79295 2.91385 2.81227 2.89301C2.81453 2.89216 2.817 2.89216 2.81926 2.89301L2.99827 2.793C3.04427 2.772 3.09228 2.754 3.13628 2.729C3.15849 2.71362 3.17892 2.69584 3.19725 2.67599H3.21425C3.23716 2.67697 3.25987 2.67127 3.27959 2.65955C3.2993 2.64782 3.31518 2.63061 3.32527 2.61002C3.32636 2.60949 3.32754 2.60919 3.32875 2.60919C3.32996 2.60919 3.33117 2.60949 3.33226 2.61002L3.38426 2.578C3.38537 2.57754 3.38657 2.5773 3.38777 2.5773C3.38897 2.5773 3.39014 2.57754 3.39125 2.578C3.42225 2.578 3.45825 2.578 3.46525 2.534H3.48326C3.53926 2.507 3.59625 2.482 3.64925 2.452C3.68666 2.42837 3.72272 2.40267 3.75725 2.375C3.75835 2.37453 3.75955 2.3743 3.76076 2.3743C3.76196 2.3743 3.76316 2.37453 3.76427 2.375C3.83798 2.35702 3.90475 2.31771 3.95625 2.26199C3.95736 2.26153 3.95856 2.26129 3.95976 2.26129C3.96096 2.26129 3.96216 2.26153 3.96327 2.26199C3.99427 2.26199 4.03125 2.26202 4.03725 2.21802H4.05525L4.09627 2.18802L4.11326 2.18301C4.14918 2.17024 4.18423 2.1552 4.21825 2.138C4.24151 2.12166 4.26299 2.10289 4.28227 2.082L4.29927 2.077C4.31017 2.07913 4.32136 2.07913 4.33226 2.077C4.40526 2.036 4.47827 1.99502 4.54927 1.95102C4.57085 1.93523 4.59093 1.91748 4.60927 1.89801H4.62627L4.66725 1.86801H4.68425C4.71843 1.85536 4.75183 1.84066 4.78425 1.82401C4.80746 1.8076 4.82891 1.78883 4.84825 1.76801C4.85051 1.76716 4.85301 1.76716 4.85527 1.76801L5.03425 1.668C5.08025 1.647 5.12825 1.629 5.17226 1.604C5.19448 1.58864 5.21494 1.57086 5.23326 1.55099H5.25026C5.27317 1.55197 5.29588 1.54627 5.3156 1.53455C5.33531 1.52282 5.35116 1.50561 5.36125 1.48502C5.36234 1.48449 5.36355 1.48419 5.36476 1.48419C5.36597 1.48419 5.36718 1.48449 5.36827 1.48502L5.42027 1.453C5.42138 1.45254 5.42255 1.4523 5.42375 1.4523C5.42495 1.4523 5.42615 1.45254 5.42726 1.453C5.45826 1.453 5.49427 1.453 5.50127 1.409H5.51927C5.59427 1.37 5.67025 1.33299 5.74425 1.29199C5.76644 1.27659 5.7869 1.25884 5.80525 1.23901L5.82225 1.23401L5.99126 1.134C5.99235 1.13347 5.99355 1.13321 5.99476 1.13321C5.99598 1.13321 5.99718 1.13347 5.99827 1.134C6.02489 1.13188 6.05068 1.12377 6.07371 1.11026C6.09675 1.09675 6.11642 1.07819 6.13127 1.056L6.14827 1.05099C6.18419 1.03823 6.21924 1.02322 6.25325 1.00601C6.27651 0.989673 6.29799 0.9709 6.31727 0.950012L6.33427 0.945007C6.34517 0.947113 6.35636 0.947113 6.36726 0.945007C6.44026 0.904007 6.51327 0.863 6.58427 0.819C6.60585 0.803198 6.62593 0.785479 6.64427 0.766022H6.66127L6.70225 0.735992H6.71925C6.75342 0.723305 6.78682 0.708636 6.81926 0.692017C6.84246 0.675602 6.8639 0.656836 6.88325 0.636017C6.88551 0.635173 6.88802 0.635173 6.89027 0.636017L7.06926 0.536011C7.11526 0.515011 7.16326 0.497015 7.20726 0.472015C7.22947 0.456635 7.24993 0.438853 7.26826 0.419006H7.28526C7.30818 0.419983 7.33089 0.414248 7.3506 0.402527C7.37031 0.390805 7.38617 0.373595 7.39625 0.352997C7.39734 0.352466 7.39855 0.352203 7.39976 0.352203C7.40098 0.352203 7.40218 0.352466 7.40327 0.352997L7.45528 0.321014H7.46327C7.50727 0.304014 7.55227 0.287012 7.59627 0.269012C7.69627 0.225012 7.80326 0.174993 7.91026 0.136993C8.02412 0.0966159 8.14033 0.063245 8.25825 0.0370178C8.35671 0.0143522 8.45726 0.00193478 8.55827 0C8.70327 0 8.84827 0.00899609 8.99327 0.0209961C9.10427 0.0309961 9.21426 0.0500002 9.32426 0.0690002C9.37298 0.0786973 9.42082 0.0924264 9.46727 0.110016C9.66954 0.177823 9.86346 0.268393 10.0453 0.380005C10.0593 0.385783 10.0741 0.389173 10.0892 0.390015L10.1073 0.39502L10.1492 0.424011H10.1663C10.1818 0.44747 10.2025 0.467047 10.2267 0.481262C10.251 0.495477 10.2782 0.503953 10.3063 0.506012L10.4853 0.606018C10.4864 0.605551 10.4876 0.605286 10.4888 0.605286C10.49 0.605286 10.4912 0.605551 10.4923 0.606018C10.5095 0.62429 10.5286 0.640693 10.5493 0.654999C10.6053 0.685999 10.6633 0.712997 10.7203 0.740997H10.7373C10.7457 0.754193 10.7562 0.766003 10.7683 0.776001C10.8203 0.807001 10.8683 0.837997 10.9263 0.865997C10.9843 0.893997 11.0073 0.904004 11.0473 0.923004L11.0643 0.928009C11.1064 0.980933 11.1666 1.01653 11.2333 1.02802L11.2503 1.03302L11.2913 1.06302H11.3083C11.3227 1.08571 11.3422 1.10468 11.3653 1.11841C11.3884 1.13213 11.4145 1.14021 11.4413 1.142C11.4424 1.14147 11.4435 1.1412 11.4447 1.1412C11.446 1.1412 11.4472 1.14147 11.4483 1.142L11.6173 1.242L11.6343 1.24701C11.6514 1.26535 11.6706 1.28179 11.6913 1.29602C11.7473 1.32702 11.8053 1.35402 11.8623 1.38202H11.8803C11.8873 1.42702 11.9233 1.422 11.9543 1.427C11.9554 1.42653 11.9565 1.4263 11.9577 1.4263C11.959 1.4263 11.9601 1.42653 11.9613 1.427L12.1303 1.52701L12.1473 1.53201L12.1893 1.561H12.2063C12.2218 1.58446 12.2425 1.60404 12.2667 1.61826C12.291 1.63247 12.3182 1.64095 12.3463 1.64301L12.5253 1.74301C12.5264 1.74254 12.5276 1.74231 12.5288 1.74231C12.53 1.74231 12.5312 1.74254 12.5323 1.74301C12.5495 1.7613 12.5686 1.7777 12.5892 1.79199C12.6452 1.82299 12.7033 1.85002 12.7603 1.87802H12.7773C12.7857 1.89121 12.7962 1.90298 12.8083 1.91299C12.8603 1.94399 12.9083 1.97502 12.9663 2.00302C13.0243 2.03102 13.0463 2.041 13.0873 2.06L13.1043 2.065C13.1466 2.11778 13.2066 2.15334 13.2733 2.16501L13.2903 2.17001L13.3313 2.19901H13.3483C13.3568 2.21211 13.3673 2.2239 13.3793 2.23401C13.4323 2.26601 13.4853 2.29702 13.5393 2.32602C13.5773 2.34602 13.6173 2.36301 13.6573 2.38101H13.6743C13.6922 2.40085 13.7124 2.41864 13.7343 2.43402C13.7883 2.46402 13.8453 2.48902 13.9013 2.51602H13.9193C13.9263 2.56102 13.9623 2.556 13.9933 2.56C13.9944 2.55953 13.9955 2.5593 13.9967 2.5593C13.998 2.5593 13.9992 2.55953 14.0003 2.56L14.1693 2.66L14.1863 2.66501L14.2272 2.694H14.2442C14.2598 2.71746 14.2805 2.73707 14.3047 2.75128C14.329 2.7655 14.3562 2.77394 14.3843 2.776L14.5632 2.87601C14.5644 2.87554 14.5656 2.87531 14.5668 2.87531C14.568 2.87531 14.5692 2.87554 14.5703 2.87601C14.5875 2.89434 14.6066 2.91078 14.6273 2.92502C14.6833 2.95602 14.7413 2.98302 14.7983 3.01102H14.8153C14.8242 3.02415 14.835 3.03595 14.8473 3.04602C14.8983 3.07702 14.9472 3.10701 15.0032 3.13501C15.0592 3.16301 15.0853 3.17399 15.1263 3.19299L15.1433 3.198C15.1856 3.25078 15.2456 3.28634 15.3123 3.298L15.3293 3.30301L15.3703 3.332H15.3873C15.3958 3.3451 15.4063 3.3569 15.4183 3.367C15.4713 3.399 15.5243 3.43001 15.5783 3.45901C15.6163 3.47901 15.6563 3.49601 15.6963 3.51401H15.7133C15.7316 3.5339 15.752 3.55169 15.7742 3.56702C15.8282 3.59702 15.8853 3.62202 15.9413 3.64902H15.9593C15.9663 3.69402 16.0022 3.68899 16.0332 3.69299C16.0344 3.69253 16.0356 3.69229 16.0368 3.69229C16.038 3.69229 16.0392 3.69253 16.0403 3.69299C16.0403 3.70099 16.0473 3.712 16.0543 3.716C16.1143 3.754 16.1733 3.79301 16.2343 3.82901C16.2793 3.85501 16.3273 3.87501 16.3733 3.89801L16.4023 3.914L16.4303 3.935C16.4325 3.93415 16.435 3.93415 16.4373 3.935L16.4763 3.96701C16.4774 3.96654 16.4785 3.96631 16.4797 3.96631C16.481 3.96631 16.4822 3.96654 16.4833 3.96701L16.5223 4L16.5533 4.02499L16.6233 4.08401L16.6353 4.09601L16.8103 4.271L16.8363 4.30099L16.8813 4.35202L16.9073 4.383L16.9743 4.46899C16.9748 4.47008 16.9751 4.47129 16.9751 4.4725C16.9751 4.47372 16.9748 4.47492 16.9743 4.47601L16.9953 4.504L17.0093 4.52301L17.0653 4.60901L17.0783 4.629L17.1103 4.67999C17.1107 4.6811 17.111 4.6823 17.111 4.6835C17.111 4.6847 17.1107 4.6859 17.1103 4.68701C17.1124 4.70399 17.116 4.72071 17.1213 4.737C17.1813 4.87833 17.2419 5.01934 17.3033 5.16C17.3093 5.174 17.3263 5.183 17.3383 5.194V5.216C17.3383 5.23 17.3273 5.246 17.3313 5.258C17.4078 5.54206 17.4415 5.83598 17.4313 6.13C17.4313 8.54867 17.4313 10.9677 17.4313 13.387C17.4313 13.469 17.4313 13.55 17.4313 13.632C17.4263 13.666 17.4223 13.701 17.4153 13.732C17.394 13.8095 17.378 13.8884 17.3673 13.968C17.3536 14.0714 17.3256 14.1723 17.2843 14.268C17.2316 14.4052 17.1702 14.5388 17.1003 14.668C16.9734 14.9038 16.8039 15.1141 16.6003 15.288C16.4345 15.4403 16.245 15.5646 16.0393 15.656C15.9283 15.704 15.8173 15.756 15.7043 15.796C15.6476 15.814 15.5898 15.8284 15.5313 15.839L15.5063 15.848H15.4843L15.4593 15.859L15.3443 15.873L15.3193 15.881H15.2513L15.2033 15.892L15.2023 15.891ZM1.14925 9.68201C1.14925 10.9213 1.14925 12.1603 1.14925 13.399C1.14259 13.6749 1.22347 13.9459 1.38026 14.173C1.49791 14.3507 1.65822 14.496 1.84654 14.5958C2.03486 14.6955 2.24518 14.7465 2.45827 14.744C3.35827 14.75 4.26327 14.744 5.16627 14.744C5.22027 14.744 5.23627 14.729 5.23527 14.674C5.23527 13.729 5.23527 12.783 5.23527 11.838C5.23538 11.6516 5.24873 11.4655 5.27525 11.281C5.32531 10.9465 5.42651 10.6217 5.57527 10.318C5.80848 9.83138 6.15066 9.40502 6.57527 9.07201C6.80536 8.89054 7.05733 8.73869 7.32527 8.62001C7.62764 8.48691 7.94757 8.398 8.27525 8.356C8.56254 8.31816 8.85339 8.31581 9.14125 8.349C9.44408 8.38375 9.74099 8.45839 10.0242 8.571C10.3313 8.69258 10.6196 8.85724 10.8803 9.06001C11.2205 9.32381 11.509 9.64827 11.7312 10.017C11.8918 10.2811 12.0159 10.5657 12.1003 10.863C12.1844 11.1442 12.2295 11.4356 12.2343 11.729C12.2343 12.711 12.2343 13.694 12.2343 14.676C12.2343 14.724 12.2443 14.745 12.2983 14.745C13.2083 14.745 14.1193 14.745 15.0293 14.745C15.2879 14.7457 15.5402 14.6649 15.7503 14.514C15.9299 14.3932 16.0762 14.2291 16.1756 14.0369C16.2751 13.8446 16.3245 13.6304 16.3193 13.414C16.3193 10.918 16.3193 8.42234 16.3193 5.927C16.319 5.75539 16.285 5.5855 16.2193 5.427C16.1086 5.1524 15.9075 4.92378 15.6492 4.77899C15.3682 4.61699 15.0863 4.458 14.8053 4.297L13.8652 3.759L12.9503 3.23599L12.0813 2.73599L11.1563 2.20801L10.3683 1.75702L9.55925 1.29602C9.38345 1.18169 9.18931 1.09847 8.98527 1.05002C8.6814 0.989107 8.36576 1.03874 8.09526 1.19C7.86726 1.316 7.64326 1.448 7.41826 1.577L6.42827 2.14301L5.50825 2.668L4.64924 3.15802L3.65526 3.728L2.84227 4.19202C2.59827 4.33102 2.35327 4.46999 2.11027 4.61099C1.95734 4.69075 1.80969 4.78027 1.66826 4.879C1.50225 5.00115 1.36819 5.16158 1.27748 5.34665C1.18677 5.53172 1.14211 5.73598 1.14726 5.94202C1.14793 7.19068 1.14858 8.43768 1.14925 9.68301V9.68201ZM8.73326 14.747H10.9973C11.0393 14.747 11.0722 14.747 11.0722 14.689C11.0722 13.705 11.0722 12.72 11.0722 11.736C11.0719 11.6075 11.0558 11.4796 11.0242 11.355C10.9787 11.1851 10.9229 11.0182 10.8573 10.855C10.7759 10.6614 10.6631 10.4827 10.5233 10.326C10.2774 10.0334 9.96311 9.80597 9.60826 9.664C9.36316 9.56429 9.10266 9.50779 8.83827 9.49701C8.5054 9.48311 8.17344 9.54144 7.86525 9.668C7.63394 9.75979 7.42017 9.89071 7.23326 10.055C7.10569 10.1656 6.99006 10.2893 6.88826 10.424C6.77496 10.5764 6.67748 10.7399 6.59727 10.912C6.46413 11.2156 6.39894 11.5446 6.40626 11.876C6.40626 12.802 6.40626 13.728 6.40626 14.654C6.40626 14.747 6.40626 14.747 6.49626 14.747H8.73326Z" fill="#5B607A"/>
</svg>

            )
				}
			})()}
		</>
	);
}