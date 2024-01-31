const customers = [
	{
		id: 1,
		name: 'Jane Cooper',
		company: 'Microsoft',
		phone: '(225) 555-0118',
		email: 'jane@microsoft.com',
		country: 'United States',
		isActive: true,
	},
	{
		id: 2,
		name: 'Floyd Miles',
		company: 'Yahoo',
		phone: '(205) 555-0100',
		email: 'floyd@yahoo.com',
		country: 'Kiribati',
		isActive: false,
	},
	{
		id: 3,
		name: 'Ronald Richards',
		company: 'Adobe',
		phone: '(302) 555-0107',
		email: 'ronald@adobe.com',
		country: 'Israel',
		isActive: false,
	},
	{
		id: 4,
		name: 'Marvin McKinney',
		company: 'Tesla',
		phone: '(252) 555-0126',
		email: 'marvin@tesla.com',
		country: 'Iran',
		isActive: true,
	},
	{
		id: 5,
		name: 'Jerome Bell',
		company: 'Google',
		phone: '(629) 555-0129',
		email: 'jerome@google.com',
		country: 'Réunion',
		isActive: true,
	},
	{
		id: 6,
		name: 'Kathryn Murphy',
		company: 'Microsoft',
		phone: '(406) 555-0120',
		email: 'kathryn@microsoft.com',
		country: 'Curaçao',
		isActive: true,
	},
	{
		id: 7,
		name: 'Jacob Jones',
		company: 'Yahoo',
		phone: '(208) 555-0112',
		email: 'jacob@yahoo.com',
		country: 'Brazil',
		isActive: true,
	},
	{
		id: 8,
		name: 'Kristin Watson',
		company: 'Facebook',
		phone: '(704) 555-0127',
		email: 'kristin@facebook.com',
		country: 'Åland Islands',
		isActive: false,
	},
	{
		id: 9,
		name: 'Ella Rodriguez',
		company: 'Apple',
		phone: '(409) 555-0124',
		email: 'ella@apple.com',
		country: 'Netherlands',
		isActive: true,
	},
	{
		id: 10,
		name: 'Milton Stewart',
		company: 'Amazon',
		phone: '(503) 555-0111',
		email: 'milton@amazon.com',
		country: 'Japan',
		isActive: false,
	},
	{
		id: 11,
		name: 'Leona Turner',
		company: 'Tesla',
		phone: '(306) 555-0119',
		email: 'leona@tesla.com',
		country: 'New Zealand',
		isActive: true,
	},
	{
		id: 12,
		name: 'Victor Warren',
		company: 'Google',
		phone: '(408) 555-0115',
		email: 'victor@google.com',
		country: 'Maldives',
		isActive: false,
	},
	{
		id: 13,
		name: 'Harold Fisher',
		company: 'Microsoft',
		phone: '(209) 555-0113',
		email: 'harold@microsoft.com',
		country: 'Thailand',
		isActive: true,
	},
	{
		id: 14,
		name: 'Samantha Wells',
		company: 'Facebook',
		phone: '(501) 555-0122',
		email: 'samantha@facebook.com',
		country: 'Costa Rica',
		isActive: true,
	},
	{
		id: 15,
		name: 'Arthur Phillips',
		company: 'Yahoo',
		phone: '(602) 555-0125',
		email: 'arthur@yahoo.com',
		country: 'South Korea',
		isActive: false,
	},
	{
		id: 16,
		name: 'Evelyn Turner',
		company: 'Adobe',
		phone: '(303) 555-0121',
		email: 'evelyn@adobe.com',
		country: 'Russia',
		isActive: false,
	},
	{
		id: 17,
		name: 'Peter Davis',
		company: 'Tesla',
		phone: '(215) 555-0123',
		email: 'peter@tesla.com',
		country: 'Argentina',
		isActive: true,
	},
	{
		id: 18,
		name: 'Linda Martinez',
		company: 'Google',
		phone: '(312) 555-0116',
		email: 'linda@google.com',
		country: 'United Arab Emirates',
		isActive: true,
	},
	{
		id: 19,
		name: 'Bruce Ramirez',
		company: 'Microsoft',
		phone: '(409) 555-0117',
		email: 'bruce@microsoft.com',
		country: 'Canada',
		isActive: false,
	},
	{
		id: 20,
		name: 'Rebecca Hughes',
		company: 'Facebook',
		phone: '(503) 555-0128',
		email: 'rebecca@facebook.com',
		country: 'Italy',
		isActive: true,
	},
	{
		id: 21,
		name: 'John Garcia',
		company: 'Amazon',
		phone: '(210) 555-0129',
		email: 'john@amazon.com',
		country: 'Spain',
		isActive: false,
	},
	{
		id: 22,
		name: 'Alice Wilson',
		company: 'Microsoft',
		phone: '(303) 555-0130',
		email: 'alice@microsoft.com',
		country: 'Australia',
		isActive: true,
	},
	{
		id: 23,
		name: 'Brian Clark',
		company: 'Google',
		phone: '(415) 555-0131',
		email: 'brian@google.com',
		country: 'Germany',
		isActive: true,
	},
	{
		id: 24,
		name: 'Lucy Nelson',
		company: 'Facebook',
		phone: '(602) 555-0132',
		email: 'lucy@facebook.com',
		country: 'Mexico',
		isActive: false,
	},
	{
		id: 25,
		name: 'Oscar Parker',
		company: 'Tesla',
		phone: '(503) 555-0133',
		email: 'oscar@tesla.com',
		country: 'Norway',
		isActive: true,
	},
	{
		id: 26,
		name: 'Eva Richardson',
		company: 'Adobe',
		phone: '(312) 555-0134',
		email: 'eva@adobe.com',
		country: 'Singapore',
		isActive: false,
	},
	{
		id: 27,
		name: 'Gary Collins',
		company: 'Microsoft',
		phone: '(408) 555-0135',
		email: 'gary@microsoft.com',
		country: 'South Africa',
		isActive: true,
	},
	{
		id: 28,
		name: 'Sophia Perez',
		company: 'Google',
		phone: '(415) 555-0136',
		email: 'sophia@google.com',
		country: 'Sweden',
		isActive: false,
	},
	{
		id: 29,
		name: 'Michael Mitchell',
		company: 'Tesla',
		phone: '(209) 555-0137',
		email: 'michael@tesla.com',
		country: 'Switzerland',
		isActive: true,
	},
	{
		id: 30,
		name: 'Isabel Sanchez',
		company: 'Yahoo',
		phone: '(303) 555-0138',
		email: 'isabel@yahoo.com',
		country: 'United Kingdom',
		isActive: true,
	},
	{
		id: 31,
		name: 'Andrew White',
		company: 'Facebook',
		phone: '(602) 555-0139',
		email: 'andrew@facebook.com',
		country: 'Vietnam',
		isActive: false,
	},
	{
		id: 32,
		name: 'Catherine Taylor',
		company: 'Adobe',
		phone: '(312) 555-0140',
		email: 'catherine@adobe.com',
		country: 'Zimbabwe',
		isActive: true,
	},
	{
		id: 33,
		name: 'Daniel Rodriguez',
		company: 'Microsoft',
		phone: '(415) 555-0141',
		email: 'daniel@microsoft.com',
		country: 'Brazil',
		isActive: false,
	},
];

const rowsPerPage = 8;
let currentPage = 1;

function displayData(page) {
	const tableBody = $('.customers-list tbody');
	tableBody.empty();

	const startIdx = (page - 1) * rowsPerPage;
	const endIdx = startIdx + rowsPerPage;

	for (let i = startIdx; i < endIdx && i < customers.length; i++) {
		const customer = customers[i];
		const statusClass = customer.isActive ? 'active-status' : '';

		const row = `<tr>
        <td>${customer.name}</td>
        <td>${customer.company}</td>
        <td>${customer.phone}</td>
        <td>${customer.email}</td>
        <td>${customer.country}</td>
        <td>
					<div class="status ${statusClass}">
						${customer.isActive ? 'Active' : 'Inactive'}
					</div>
				</td>
      </tr>`;

		tableBody.append(row);
	}

	$('.pagination-info').text(
		`Showing data ${startIdx + 1} to ${Math.min(endIdx, customers.length)} of ${
			customers.length
		} entries`
	);
}

function updatePagination(totalPages) {
	$('.pagination').empty();

	let arrowItem = `
		<li>
			<button class="page-link"><</button>
		</li>
	`;
	$('.pagination').append(arrowItem);

	for (let i = 1; i <= totalPages; i++) {
		const pageItem = `
			<li>
				<button class="page-link ${currentPage === i ? 'active' : ''}">${i}</button>
			</li>
		`;
		$('.pagination').append(pageItem);
	}

	arrowItem = `
		<li>
			<button class="page-link">></button>
		</li>
	`;
	$('.pagination').append(arrowItem);
}

$(document).ready(function () {
	displayData(currentPage);

	const totalPages = Math.ceil(customers.length / rowsPerPage);
	updatePagination(totalPages);

	$('.pagination').on('click', '.page-link', function (event) {
		event.preventDefault();
		let currentStage = $(this).text();

		if (currentStage === '<') {
			currentPage = Math.max(1, currentPage - 1);
		} else if (currentStage === '>') {
			currentPage = Math.min(totalPages, currentPage + 1);
		} else {
			currentPage = parseInt(currentStage);
		}
		displayData(currentPage);
		updatePagination(totalPages);
	});
});
