import datetime
from src.db.database import Base
from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from typing import Annotated, Optional
from sqlalchemy.dialects.postgresql import UUID

from .enums import Side, Status, Instrument


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(30))
    slug: Mapped[str] = mapped_column(String(30), unique=True)

    orders: Mapped[list["Order"]] = relationship(back_populates="user")

    



created_at = Annotated[datetime.datetime, mapped_column(default=datetime.datetime.utcnow)]
updated_at = Annotated[datetime.datetime, mapped_column(
    default=datetime.datetime.utcnow,
    onupdate=datetime.datetime.utcnow,
)]




class Order(Base):
    __tablename__ = "orders"

    id: Mapped[int] = mapped_column(primary_key=True)
    side: Mapped[Side]
    status: Mapped[Status]
    created_at: Mapped[created_at]
    updated_at: Mapped[updated_at]
    price: Mapped[float]
    amount: Mapped[float]
    instrument: Mapped[Instrument]
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"))
  
    user: Mapped["User"] = relationship(back_populates="orders")






