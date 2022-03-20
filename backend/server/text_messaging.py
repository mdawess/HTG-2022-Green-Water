import os
from twilio.rest import Client

TWILIO_ACCOUNT_SID = 'ACdac08722a3b9cb19c618ce10bf81a37d'
TWILIO_AUTH_TOKEN = '62912a9cf18a452100b8010cad5f2599'
TWILIO_PHONE_NUMBER = '+15878516120'

account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)


def calculate_rain_forecast(year: int, crop_type: str) -> float:
    """Returns the forecased rainfall based on regression analysis."""

    precipitation = -33.5 + 0.02 * year
    weekly_precipitation = precipitation / 52

    # Sending specific texts based on the inputted type of crop
    # All irrigation thresholds based off irrigation calculations in Excel model
    if crop_type == 'Sugarcane':
        if weekly_precipitation >= 30.5:
            send_message(crop_type, weekly_precipitation - 30.5,
                         weekly_precipitation, '+9054468041', 'Carlos')
    elif crop_type == 'Cotton':
        if weekly_precipitation >= 69.1:
            send_message(crop_type, weekly_precipitation - 69.1,
                         weekly_precipitation, '+9054468041', 'Carlos')
    elif crop_type == 'Soy':
        if weekly_precipitation >= 14.4:
            send_message(crop_type, weekly_precipitation - 14.4,
                         weekly_precipitation, '+9054468041', 'Carlos')


def send_message(crop_type: str, irrigation_amount: float, weekly_precipitation: float, phone_number: str, farmer_name: str) -> None:
    """Sends a message to farmers if the forecasted rain exceeds the required amount
    for the specified crop_type.
    """
    farmer_message = 'Hi ' + farmer_name + '! Our algorithms forecast ' + \
        str(weekly_precipitation) + 'mm this week. We recommend you use ' + \
        str(irrigation_amount * 10000) + 'L/ha to irrigate your crops'

    message = client.messages.create(
        body=farmer_message,
        from_=TWILIO_PHONE_NUMBER,
        to=phone_number
    )
