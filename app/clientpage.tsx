'use client';

export default function ClientIndexPage() {
  return (
    <div>
      <div className="flex h-[500px] w-full items-center justify-center">
        <div className="flex w-1/2 flex-col justify-center gap-10 p-10">
          <h3 className="text-xl font-bold">프리랜서와 기업 매칭 플랫폼</h3>
          <p>노베이스 노데이터 기반으로 아무런 경험도 없고 노하우도 없는 국내 무명 매칭 플랫폼입니다.</p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center gap-10 p-10">
          <button className="w-64 bg-slate-300 p-4">개발자 찾기</button>
          <button className="w-64 bg-slate-300 p-4">프로젝트 보기</button>
        </div>
      </div>
      <div>
        Swiper
      </div>
    </div>
  );
}
