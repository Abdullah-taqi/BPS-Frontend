  // else if (JSON.stringify(num) === '11'){
    //   const ema26 = ema()
		// 	.id(0)
		// 	.options({ windowSize: 26 })
		// 	.merge((d, c) => { d.ema26 = c; })
		// 	.accessor(d => d.ema26);

		// const ema12 = ema()
		// 	.id(1)
		// 	.options({ windowSize: 12 })
		// 	.merge((d, c) => {d.ema12 = c;})
		// 	.accessor(d => d.ema12);

		// const macdCalculator = macd()
		// 	.options({
		// 		fast: 12,
		// 		slow: 26,
		// 		signal: 9,
		// 	})
		// 	.merge((d, c) => {d.macd = c;})
		// 	.accessor(d => d.macd);

		// const { type, data: initialData, width, ratio } = this.props;

		// const calculatedData = macdCalculator(ema12(ema26(initialData)));
		// const xScaleProvider = discontinuousTimeScaleProvider
		// 	.inputDateAccessor(d => d.date);
		// const {
		// 	data,
		// 	xScale,
		// 	xAccessor,
		// 	displayXAccessor,
		// } = xScaleProvider(calculatedData);

		// const start = xAccessor(last(data));
		// const end = xAccessor(data[Math.max(0, data.length - 150)]);
		// const xExtents = [start, end];

		// return (
		// 	<ChartCanvas ref={this.saveCanvasNode}
		// 		height={600}
		// 		width={width}
		// 		ratio={ratio}
		// 		margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
		// 		type={type}
		// 		seriesName="MSFT"
		// 		data={data}
		// 		xScale={xScale}
		// 		xAccessor={xAccessor}
		// 		displayXAccessor={displayXAccessor}
		// 		// xExtents={xExtents}
    //     onLoadMore={this.handleDownloadMore}
    //       ref={node => {
    //         this.saveCanvas(node);
    //       }}
		// 	>
		// 		<Chart id={1} height={400}
		// 			yExtents={[d => [d.high, d.low], ema26.accessor(), ema12.accessor()]}
		// 			padding={{ top: 10, bottom: 20 }}
		// 		>
		// 			<XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} />
		// 			<YAxis axisAt="right" orient="right" ticks={5} />
		// 			<MouseCoordinateY
		// 				at="right"
		// 				orient="right"
		// 				displayFormat={format(".2f")} />

		// 			<CandlestickSeries />
		// 			<LineSeries yAccessor={ema26.accessor()} stroke={ema26.stroke()}/>
		// 			<LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()}/>

		// 			<CurrentCoordinate yAccessor={ema26.accessor()} fill={ema26.stroke()} />
		// 			<CurrentCoordinate yAccessor={ema12.accessor()} fill={ema12.stroke()} />

		// 			<EdgeIndicator itemType="last" orient="right" edgeAt="right"
		// 				yAccessor={d => d.close} fill={d => d.close > d.open ? "#6BA583" : "#FF0000"}/>

		// 			<OHLCTooltip origin={[-40, 0]}/>

		// 			<MovingAverageTooltip
		// 				onClick={e => console.log(e)}
		// 				origin={[-38, 15]}
		// 				options={[
		// 					{
		// 						yAccessor: ema26.accessor(),
		// 						type: ema26.type(),
		// 						stroke: ema26.stroke(),
		// 						windowSize: ema26.options().windowSize,
		// 					},
		// 					{
		// 						yAccessor: ema12.accessor(),
		// 						type: ema12.type(),
		// 						stroke: ema12.stroke(),
		// 						windowSize: ema12.options().windowSize,
		// 					},
		// 				]}
		// 			/>
		// 			<TrendLine
		// 				ref={this.saveInteractiveNodes("Trendline", 1)}
		// 				enabled={this.state.enableTrendLine}
		// 				type="RAY"
		// 				snap={false}
		// 				snapTo={d => [d.high, d.low]}
		// 				onStart={() => console.log("START")}
		// 				onComplete={this.onDrawCompleteChart1}
		// 				trends={this.state.trends_1}
		// 			/>
		// 		</Chart>
		// 		<Chart id={2} height={150}
		// 			yExtents={[d => d.volume]}
		// 			origin={(w, h) => [0, h - 300]}
		// 		>
		// 			<YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")}/>

		// 			<MouseCoordinateY
		// 				at="left"
		// 				orient="left"
		// 				displayFormat={format(".4s")} />

		// 			<BarSeries yAccessor={d => d.volume} fill={d => d.close > d.open ? "#6BA583" : "#FF0000"} />
		// 		</Chart>
		// 		<Chart id={3} height={150}
		// 			yExtents={macdCalculator.accessor()}
		// 			origin={(w, h) => [0, h - 150]} padding={{ top: 10, bottom: 10 }}
		// 		>
		// 			<XAxis axisAt="bottom" orient="bottom"/>
		// 			<YAxis axisAt="right" orient="right" ticks={2} />

		// 			<MouseCoordinateX
		// 				at="bottom"
		// 				orient="bottom"
		// 				displayFormat={timeFormat("%Y-%m-%d")} />
		// 			<MouseCoordinateY
		// 				at="right"
		// 				orient="right"
		// 				displayFormat={format(".2f")} />
		// 			<TrendLine
		// 				ref={this.saveInteractiveNodes("Trendline", 3)}
		// 				enabled={this.state.enableTrendLine}
		// 				type="RAY"
		// 				snap={false}
		// 				snapTo={d => [d.high, d.low]}
		// 				onStart={() => console.log("START")}
		// 				onComplete={this.onDrawCompleteChart3}
		// 				trends={this.state.trends_3}
		// 			/>
		// 			<MACDSeries yAccessor={d => d.macd}
		// 				{...macdAppearance} />
		// 			<MACDTooltip
		// 				origin={[-38, 15]}
		// 				yAccessor={d => d.macd}
		// 				options={macdCalculator.options()}
		// 				appearance={macdAppearance}
		// 			/>
		// 		</Chart>
		// 		<CrossHairCursor />
		// 		<DrawingObjectSelector
		// 			enabled={!this.state.enableTrendLine}
		// 			getInteractiveNodes={this.getInteractiveNodes}
		// 			drawingObjectMap={{
		// 				Trendline: "trends"
		// 			}}
		// 			onSelect={this.handleSelection}
		// 		/>
		// 	</ChartCanvas>
		// );
    // }
    // else if (JSON.stringify(num) === '22'){
      
    // }
    // else if (JSON.stringify(num) === '33'){
      
    // }
    // else if (JSON.stringify(num) === '44'){
      
    // }
    // else if (JSON.stringify(num) === '55'){
      
    // }