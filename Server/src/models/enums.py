import enum

class Side(enum.Enum):
    buy = "Buy"
    sell = "Sell"

class Status(enum.Enum):
    active = "Active"
    filled = "Filled"
    rejected = "Rejected"
    cancelled = "Cancelled"

class Instrument(str, enum.Enum):
    eur_usd = 'EUR/USD'
    eur_rub = 'EUR/RUB'
    usd_rub = 'USD/RUB'