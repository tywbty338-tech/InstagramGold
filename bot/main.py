import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes

TOKEN = os.getenv("BOT_TOKEN")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    # سيتم تغيير هذا الرابط إلى رابط الاستضافة الفعلي الخاص بك
    web_app_url = "https://your-server-ip-or-domain.com" 
    
    keyboard = [
        [InlineKeyboardButton("🎮 Play Crypto Tickets", web_app=WebAppInfo(url=web_app_url))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "⚡️ أهلاً بك في منصة Crypto Tickets!\n💰 تداول، العب، واربح.\n\nاضغط بالأسفل للبدء:",
        reply_markup=reply_markup
    )

def main():
    if not TOKEN or TOKEN == "ضع_توكن_البوت_هنا":
        print("يرجى وضع توكن البوت في ملف .env")
        return
    application = Application.builder().token(TOKEN).build()
    application.add_handler(CommandHandler("start", start))
    print("Bot is running...")
    application.run_polling()

if __name__ == '__main__':
    main()
